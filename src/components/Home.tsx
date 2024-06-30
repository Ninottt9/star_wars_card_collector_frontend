import { UserProvider } from '../context/UserContext';
import Inventory from './Inventory';
import InventoryList from './InventoryList';
import Profile from './Profile';

export default function Home() {
  return (
    <UserProvider>
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home page!</p>
        <Profile />
        <h2>Inventory</h2>
        <Inventory />
      </div>
    </UserProvider>
  );
}
