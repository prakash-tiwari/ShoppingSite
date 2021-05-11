import { QueryClient, QueryClientProvider } from 'react-query';
import About from '../ShoppingPage/ShoppingPage'



const client = new QueryClient();

const Main = () => {
    return (
    <QueryClientProvider client={client}>   
   <About />
  </QueryClientProvider>
  );
}

export default Main;
