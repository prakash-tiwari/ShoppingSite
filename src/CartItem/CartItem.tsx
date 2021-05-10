import Button  from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';

// Types
import { CartItemType } from '../components/ShoppingPage';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};


const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (    
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className='information'>
        <p>Price: Rs. {item.price}</p>
        <p>Total: Rs. {(item.amount * item.price).toFixed(2)}</p>
        <img src={item.image} alt={item.title} />
        
      </div>  
      <br />    
      <ButtonGroup size="large" color="primary" aria-label="outlined primary button group">
      <Button
          size='small'
          disableElevation
          variant='contained'
          color="primary"
          onClick={() => removeFromCart(item.id)}
        >
             -
        </Button>
        <Button><p>{item.amount} </p> </Button>
        <Button
          size='small'
          disableElevation
          variant='contained'
          color="primary"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
        </ButtonGroup>      
    </div>
    <br />
    <Divider />
  </Wrapper>
);

export default CartItem;