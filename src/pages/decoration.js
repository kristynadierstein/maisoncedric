// external libraries
import React from "react"
import { graphql } from 'gatsby'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// import styles
import '../styles/main.scss'

// import components
import Card from '../components/card.js'
import Filter from '../components/filter.js'
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import MobileNavbarFilters from '../components/mobile-navbar-filters.js'
import Navbar from '../components/navbar.js'
import NewsletterAd from '../components/newsletterAd.js'

class Decoration extends React.Component {
  constructor(props){
    super(props)

    let subCategoriesFlat = []
    let subCategories = []

    this.props.data.allAirtable.nodes.map(node => (
      node.data.Sub_Categories.sort().map(subCategory => (
        !subCategoriesFlat.includes(subCategory) && subCategoriesFlat.push(subCategory)
      ))
    ))

    subCategoriesFlat.forEach((subCategoryFlat) => {
      subCategories.push({name: subCategoryFlat, checked: false})
    })

    subCategories = [{ name: "Toutes les catégories", checked: true }].concat(subCategories)

    this.state = {
      subCategories: subCategories,
      visible: 9
    }

    this.loadMore = this.loadMore.bind(this)
  }

  // create a function for OnClick where I will change the state and pass the function to each filter via props function loops through the names of subcategories, when checked, changes the state to true
  toggleChecked(currentSelection){
    // toggling the selected category and returning a new array, NewSubcategories is becoming a new state for Mobilier component
    const NewSubcategories = this.state.subCategories.map(subCategory => {
      if (subCategory.name === currentSelection) {
        subCategory.checked = !subCategory.checked
      }
      return subCategory
    })

    // new function allowing user to toggle only ONE checkbox
    this.state.subCategories.forEach(subCategory => {
      if (subCategory.checked === true && subCategory.name !== currentSelection) {
        subCategory.checked = false
      }
    })

    // ****** OLD RULES *****
    // //if everything is unchecked  set the first "all" to be checked
    // const isEveryCategoryUnChecked = NewSubcategories.every((subCategory) => {
    //   return subCategory.checked === false
    // })
    // if (isEveryCategoryUnChecked) {
    //   NewSubcategories[0].checked = true
    // }
    // // if any of the other categories / normal ones is checked, we are unchecking the first one
    // const allSubcategoriesExceptTheFirst = NewSubcategories.slice(1)
    // const anyOfTheOtherSubCategoriesAreChecked = allSubcategoriesExceptTheFirst.some((subCategory) => subCategory.checked)
    // if (anyOfTheOtherSubCategoriesAreChecked && currentSelection !== "Toutes les catégories") {
    //   NewSubcategories[0].checked = false
    // }
    // //if you sepcifically selected "All", we uncheck the rest of the categories
    // if (currentSelection === "Toutes les catégories") {
    //   allSubcategoriesExceptTheFirst.forEach(subCategory => subCategory.checked = false)
    // }

    this.setState({subCategories: NewSubcategories})
  }

  // need the whole this.props.data.allAirtable.nodes, loop through it and find those where subcategory matches at least one of the selected subcategories
  filteredProducts(){
    const allProductsinCategory = this.props.data.allAirtable.nodes

    // if "All" is checked, return everything
    if (this.state.subCategories[0].checked){
      return allProductsinCategory
    }
    // filter all subCategories which are checked, returns an array of subc which are checked
    const allCheckedSubcategories = this.state.subCategories.filter((subCategory) => {
      return subCategory.checked === true
    })
    // we are mapping thru the above array and getting just strings with names
    const allCheckedSubcategoryNames = allCheckedSubcategories.map(element => {
      return element.name
    })
    // final logic, all the objects are being filtered based on the subcategory match
    const allMatchingProducts = allProductsinCategory.filter((product) => {
      const match = product.data.Sub_Categories.some(subcategory => allCheckedSubcategoryNames.includes(subcategory))
      return match
    })
    return allMatchingProducts
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 9}
    })
  }

  render(){
    let displayedItems = this.filteredProducts().slice(0, this.state.visible)
    const locale = this.props.intl.locale // current language

    // gives product title according to current language
    const getLocalizedProductTitle = (locale, data) => {
      if (locale === "en") {
        return data.Titre_de_l_annonce__EN_
      } else if (locale === "fr") {
        return data.Titre_de_l_annonce__FR_
      }
    }

    return (
      <React.Fragment>
        <Header/>
        <Navbar/>
        <MobileNavbarFilters
          subCategories={this.state.subCategories}
          toggleChecked={this.toggleChecked.bind(this)}
          value="Décoration"
          key="Décoration"/>
        <div className="container category">
          <div className="sidebar">
            <h1><FormattedMessage id="decoration.titre"/></h1>
            <hr/>
            <ul>
              {this.state.subCategories.map((subCategory) =>
                <Filter
                name={subCategory.name}
                checked={subCategory.checked}
                toggleChecked = {this.toggleChecked.bind(this)}
                key={subCategory.name}>
                </Filter>
              )}
            </ul>
          </div>
          <div className="row-3">
            {displayedItems.map((node, index) => {
              return(
                <Card
                  title={getLocalizedProductTitle(locale, node.data)}
                  price={node.data.Prix_de_vente}
                  status={node.data.Statut}
                  image={node.data.Images[0].url}
                  id={node.data.ID}
                  key= {node.data.ID}>
                </Card>
              )
            })}
            <div className="btn-container">
              {this.state.visible < displayedItems.length + 1 &&
                <button className="btn-see-more" onClick={this.loadMore}>
                  <FormattedMessage id="boutons.voir_plus"/>
                </button>
              }
            </div>
          </div>
        </div>
        <NewsletterAd/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default injectIntl(Decoration)

// Airtable query
export const query = graphql`
  query MyDecoQuery {
    allAirtable(sort: {fields: data___Created_Time, order: ASC}, filter: {data: {Images: {elemMatch: {size: {gt: 1}}}, Categories: {in: "Décoration"}}}) {
      nodes {
        data {
          ID
          Categories
          Sub_Categories
          Created_Time
          Prix_de_vente
          Statut
          Titre_de_l_annonce__FR_
          Titre_de_l_annonce__EN_
          Images {
            url
          }
        }
      }
    }
  }
`
