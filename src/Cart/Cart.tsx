import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../components/ShoppingPage';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button  from '@material-ui/core/Button';

import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Modal from '@material-ui/core/Modal';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
      borderRadius: 3,
      textAlign : "center",
      height: 48,      
      padding: "50px 50px",
    },
  }),
);


type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

  const [modalVal, setModalVal] = useState(false);
  const [modalText, setModalText] = useState("");
   
  const classes = useStyles();
  
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    
    const handleClose = () => {
      setModalVal(false);
    };

    const handleOpen = () => {
      setModalVal(true);
    };
    
    const ModalBody = (
         <Card style={{
                alignItems: "center",         
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                margin:"auto",
                height: 200,
                width: 500
              }} 
            >
            <CardContent>
              <Typography 
                variant="h5" component="h2"
                className={classes.root}>
                  {modalText}
           </Typography>
           </CardContent>
         </Card>
    );


  const checkOut = () => {
    if(cartItems.length>0){
      
      setModalText("Thank you for shopping with us... ")
      setModalVal(true);             
    }
  else{
    
    setModalText("Your cart is empty...");
    setModalVal(true);
  }
  
  
  }

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2> 
      <h2>Total RS: {calculateTotal(cartItems).toFixed(2)}</h2>
      <Divider />
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (        
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />            
      ))}
      <Typography variant="h2" noWrap>
      <Divider />
      Total RS: {calculateTotal(cartItems).toFixed(2)}
      </Typography>
      <Button
          size='small'
          disableElevation
          variant="contained" 
          style = {{  margin : "auto", 
                      width: 500, 
                      padding: 10, 
                      backgroundColor: "#006600"
                    }}
          onClick={checkOut}
        >
          Check Out
        </Button>
    <Modal
        open={modalVal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style = {{
          position: "absolute",
          display: "flex",         
          margin: "auto"
        }}
      >
        {ModalBody}
      </Modal>
    </Wrapper>
  );
};

export default Cart;