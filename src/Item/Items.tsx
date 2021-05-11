import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';


// Types
import { CartItemType } from '../ShoppingPage/ShoppingPage';
// Styles
import { Wrapper } from './Items.style';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};


const Item: React.FC<Props> = ({ item, handleAddToCart }) => {


  return (
   
    <Wrapper>
      <Grid>
      <img src={item.image} alt={item.title} />
      
        <h3>{item.title}</h3>
       
        <h3>Rs. {item.price}</h3>
      </Grid>
      <div style={{ padding: 20 }}>
  
      <Button 
      variant="contained"
      color="primary"
      disableElevation
      onClick={() => handleAddToCart(item)}>Add to cart</Button>
      </div>
    </Wrapper>
  
  )
};

export default Item;