//import libraries
import React from "react";
import { graphql } from 'gatsby';
import { Link } from "gatsby";
import MediaQuery from 'react-responsive';

// import styles
import '../styles/main.scss';

//import components
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import NewsletterAd from '../components/newsletterAd.js';
import Filter from '../components/filter.js';
import MobileNavbarFilters from '../components/mobile-navbar-filters.js';

export const Card = (props) => {
  return(
    <div className="card">
        <Link to={`/produit/${props.id}`} key={ props.id }>
        <div className="image" style={{backgroundImage: "url(" + props.image + ")"}}>
          {isVendu(props.status)}
        </div>
        <div className="desc">
          <p>{props.title}</p>
          <label>
            <strong>{props.price} €</strong>
          </label>
        </div>
        </Link>
      </div>
    )
    
    function isVendu(itemStatus) {
      if (itemStatus !== null) {
        return (
          <div className="vendu">
            <label htmlFor="">{itemStatus}</label>
          </div>
        );
      }
    }
  }

class Assises extends React.Component {
  constructor(props){
    super(props) 
    let subCategories = [];
    this.props.data.allAirtable.nodes.map(node => (
      node.data.Sub_Categories.sort().map(subCategory => (
        subCategories.push({ name: subCategory, checked: false })
        ))
        ))
        subCategories = [{ name: "Toutes les catégories", checked: true }].concat(subCategories);  
        this.state = { subCategories: subCategories }
      }
      // create a function for OnClick where I will change the state and pass the function to each filter via props
      //function loops thru the names of subcategories, when checked, changes the state to true
      toggleChecked(currentSelection){
        //toggling the selected category and returning a new array, NewSubcategories is becoming a new state for Mobilier component
        const NewSubcategories = this.state.subCategories.map(subCategory => {
          if (subCategory.name === currentSelection) {
            subCategory.checked = !subCategory.checked 
          }
          return subCategory
        })
        //if everything is unchecked  set the first "all" to be checked
        const isEveryCategoryUnChecked = NewSubcategories.every((subCategory) => {
          return subCategory.checked === false
        })
        if (isEveryCategoryUnChecked) {
          NewSubcategories[0].checked = true
        }
        // if any of the other categories / normal ones is checked, we are unchecking the first one
        const allSubcategoriesExceptTheFirst = NewSubcategories.slice(1)
        const anyOfTheOtherSubCategoriesAreChecked = allSubcategoriesExceptTheFirst.some((subCategory) => subCategory.checked)
        if (anyOfTheOtherSubCategoriesAreChecked && currentSelection !== "Toutes les catégories") {
          NewSubcategories[0].checked = false
        }
        //if you sepcifically selected "All", we uncheck the rest of the categories
        if (currentSelection === "Toutes les catégories") {
          allSubcategoriesExceptTheFirst.forEach(subCategory => subCategory.checked = false)
        }
        this.setState({subCategories: NewSubcategories})
      }
      
      // i need the whole this.props.data.allAirtable.nodes, loop through it and find those where subcategory 
      // matches at least one of the selected subcategories
      
      filteredProducts(){
        const allProductsinCategory = this.props.data.allAirtable.nodes
        //if "All" is checked, return everything
        if (this.state.subCategories[0].checked){
          return allProductsinCategory
        }  
        //filter all subCategories which are checked, returns an array of subc which are checked
        const allCheckedSubcategories = this.state.subCategories.filter((subCategory) => {
          return subCategory.checked === true
        })
        //we are mapping thru the above array and getting just strings with names 
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

      render(){
        // Items displayed
        let numberDisplayed = 9;
        let displayedItems = this.filteredProducts().slice(0, numberDisplayed)
        
// for mobile navbar filters we wanted to make a query inside nested component of mobile navbar however, too complicated. So easiest solution
//is to pass the subcategories looped items as a prop and pass the filtering function, which does everything as a props as well, see
// component for more details
        return (
          <React.Fragment>
            < Header />
            <MediaQuery maxDeviceWidth={1199}>
              < MobileNavbarFilters 
                subCategories={this.state.subCategories}
                toggleChecked={this.toggleChecked.bind(this)}
              />
            </MediaQuery>
            <MediaQuery minDeviceWidth={1199}>
              < Navbar />
            </MediaQuery>
            <div className="container category">
              <div className="sidebar">
                <h1>Assises</h1>
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
                    title={node.data.Titre_de_l_annonce__FR_}
                    price={node.data.Prix_de_vente}
                    status={node.data.Statut}
                    image={node.data.Images[0].url}
                    id={node.data.ID}
                    key= {node.data.ID}
                    >
                    </Card>
                  )
                })}
                <div className="btn-container">
                  <Link to="" className="btn-1">Voir plus</Link>
                </div>
              </div>
            </div>
            <NewsletterAd />
            <Footer />
          </React.Fragment>
        )
      }
}
export default Assises


// Airtable query
export const query = graphql`
  query MyAssisesQuery {
    allAirtable(sort: {fields: data___Created_Time, order: ASC}, filter: {data: {Images: {elemMatch: {size: {gt: 1}}}, Categories: {in: "Assises"}}}) {
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
`;

