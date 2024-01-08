import Profile from '../../svg icons/profile.png'
import Bag from '../../svg icons/bag.png'
import Search from '../../svg icons/search.png'
import Wishlist from '../../svg icons/heart.png'
import watch from '../../images/navbar-first-image.avif'
import {
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Hidden,
    Typography,
    ListItemIcon,
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import {Link} from 'react-router-dom';
  import CloseIcon from '@mui/icons-material/Close'; 

import {useEffect, useState} from 'react';

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredBrand, setIsHoveredBrand] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const[isSubDrawerOpen, setIsSubDrawerOpen]=useState(false);
    const [isSubDrawerOpenBrand,setIsSubDrawerOpenBrand]=useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnterBrands = () => {
        setIsHoveredBrand(true);
    };

    const handleMouseLeaveBrands = () => {
        setIsHoveredBrand(false);

    };
    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
      };
    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
      };
      const handleSubDrawerCloseCategory=()=>{
        setIsSubDrawerOpen(!isSubDrawerOpen)
      } 
      const handleSubDrawerCloseBrands=()=>{

        setIsSubDrawerOpenBrand(!isSubDrawerOpenBrand)
      }
      useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    

    return (<>
        <div className="  md:flex  flex-row justify-between items-center pl-6 pr-6 ">
        <Hidden mdUp>
        {viewportWidth <= 768 && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            
            style={{ position: 'absolute', top: '10px', left: '10px' }}
          >
            <MenuIcon />
          </IconButton>
        )}
        </Hidden>
            <div className="hidden md:flex justify-center space-x-4">
                <div>Country</div>
                <div>Location</div>
                <div>Contact us</div>
            </div>
            <div>
                <h1 className="text-3xl font-bold">TIME STONE</h1>
            </div>
            <div className="hidden md:flex space-x-4">
                <div></div>
                <div><img src={Profile}
                        alt="nopic"
                        className='w-6'/></div>
                <div><img src={Search}
                        alt="nopic"
                        className='w-6'/></div>
                <div><img src={Bag}
                        alt="nopic"
                        className='w-6'/></div>
                <div><img src={Wishlist}
                        alt="nopic"
                        className='w-6'/></div>
            </div>
        </div>
        <div className="border-t-4 border-black my-4 flex pl-6 pr-6 m-10"></div>
        <div className="hidden md:flex justify-center flex-row space-x-16">
            <div className='cursor-pointer hover:underline hover hover:underline-offset-8  '
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}><Link to='/shop'> ALL WATCHES</Link>  {
                isHovered && < div className = 'absolute top-24 left-2 right-0 z-10 flex justify-around bg-white  border-black border-t-2 border-b-2 shadow-xl w-full p-2' style = {{ width: '98vw' }} > <div><img src={watch}
                        alt="image"
                        width={"400px"}
                        height={"100px"}/></div>
                <div className=''>
                    <ul className="list-none p-0 text-left">
                        <li className="py-2">
                            <h1 className='text-xl'>SHOP BY CATEGORY</h1>
                        </li>
                        <li className="py-2 hover:text-blue-700">New Arrivals</li>
                        <li className="py-2 hover:text-blue-700 ">Coming Soon</li>
                        <li className="py-2 hover:text-blue-700">Best Sellers</li>
                        <li className="py-2 hover:text-blue-700">Mens Watches</li>
                        <li className="py-2 hover:text-blue-700">Womens Watches</li>
                        <li className="py-2 hover:text-blue-700">Sale</li>
                    </ul>
                </div>

                <div className="border-l-2 mt-2 h-64"></div>
                <div className=''>
                    <ul className="list-none p-0 text-left">
                        <li className="py-2">
                            <h1 className='text-xl hover:text-blue-700 '>Grail Watches</h1>
                        </li>
                        <li className="py-2 hover:text-blue-700">Independent Watches</li>
                        <li className="py-2 hover:text-blue-700">Anything But Ordinary</li>
                        <li className="py-2 hover:text-blue-700">Daily Drivers</li>
                        <li className="py-2 hover:text-blue-700">The Holy Trinity</li>
                        <li className="py-2 hover:text-blue-700">View All Collections</li>
                    </ul>

                </div></div>
           
            } </div>
        <div className='hover:underline hover:underline-offset-8 cursor-pointer hover:text-blue-700'>NEW ARRIVALS</div>
        <div className='cursor-pointer   '
            onMouseEnter={handleMouseEnterBrands}
            onMouseLeave={handleMouseLeaveBrands}>BRANDS {
            isHoveredBrand && < div className = 'absolute top-24 left-2 right-0 z-10 flex justify-around bg-white  border-black border-t-2 border-b-2 shadow-xl w-full p-2' style = {{ width: '98vw' }} > <div className=''>
                <ul className="list-none pt-10 text-left ">
                    <li className="py-2">
                        <h1 className='text-xl hover:text-blue-700' >BRANDS A-Z</h1>
                    </li>
                    <li className="py-2">
                        View All Brands</li>

                </ul>
            </div>
            <div className="border-l-2 mt-2 h-32"></div>
            <div className=''>
                <ul className="list-none p-0  text-left ">
                    <li className="py-2">
                        <h1 className='text-xl'>Featured Brand</h1>
                    </li>
                    <li className='py-1 hover:text-blue-700 '>Rolex</li>
                    <li className='py-1 hover:text-blue-700'>Audemars Piguet</li>
                    <li className='py-1 hover:text-blue-700'>De Bethune</li>
                </ul>

            </div>
            <div className='pt-10'>
                <ul className="list-none p-0 text-left ">
                    <li className='py-1 hover:text-blue-700'>Patek Philippe</li>
                    <li className='py-1 hover:text-blue-700'>F.P. Journe</li>
                    <li className='py-1 hover:text-blue-700'>H. Moser & Cie.</li>
                </ul>

            </div> < div className = 'pt-10' > <ul className="list-none p-0 text-left">
                <li className='py-1 hover:text-blue-700'>A. Lange & Söhne</li>
                <li className='py-1 hover:text-blue-700'>Vacheron Constantin</li>
                <li className='py-1 hover:text-blue-700'>Tudor</li>
            </ul>

        </div>
        < div className = 'pt-10' > <ul className="list-none p-0 text-left">
            <li className='py-1 hover:text-blue-700'>Breitling</li>
            <li className='py-1 hover:text-blue-700'>Omega</li>
            <li className='py-1 hover:text-blue-700'>Cartier</li>
        </ul>

    </div>
    </div>
} </div><div>SELL & TRADE</div><div>EDITORIAL</div><div>WATCHBOX STUDIOS</div></div>
<Hidden mdUp>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
        >
          <List>
          <ListItem button>
            <ListItemText
    primary={
        <Typography variant="body1" className="pt-10 font-extrabold">
          <Link to='/'><h1 className='font-extrabold text-2xl'>TIMESTONE</h1></Link>  
        </Typography>
    }
/>
            </ListItem>
            <ListItem button>
            <ListItemText
    primary={
        <Typography variant="body1" className="pt-10 font-extrabold">
          <Link to='/allwatch'><h1 className='font-extrabold hover:underline'>ALL WATCH</h1></Link>  
        </Typography>
    }
/>
            </ListItem>
            <ListItem button>
            <ListItemText
    primary={
        <Typography variant="body2"  >
           <Link to='/newArrivel'><h1 className='font-extrabold hover:underline'>NEW ARRIVEL</h1></Link> 
        </Typography>
    }
/>
            </ListItem>
            <Drawer
        anchor="center"
        open={isSubDrawerOpenBrand}
        onClose={handleSubDrawerCloseBrands}
        style={{width:'300px'}}
      >
        <List>
        <ListItem button onClick={handleSubDrawerCloseBrands}>
      <ListItemIcon>
        <IconButton edge="start" color="inherit">
          <CloseIcon onClick={handleSubDrawerCloseBrands} />
        </IconButton>
      </ListItemIcon>
    </ListItem>
          {/* Add sub-categories or links within this sub-drawer */}
          <ListItem button>
            <ListItemText primary="Sub-category 1" className='pt-10' />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sub-category 2" />
          </ListItem>
          {/* Add more sub-categories or links as needed */}
        </List>
      </Drawer>
            <ListItem button>
            <ListItemText
    primary={
        <Typography variant="body2"  >
          <h1 className='font-extrabold hover:underline' onClick={handleSubDrawerCloseBrands}>BRANDS</h1>
        </Typography>
    }
/>
            </ListItem>
            <Drawer
        anchor="center"
        open={isSubDrawerOpen}
        onClose={handleSubDrawerCloseCategory}
        style={{width:'300px'}}
      >
        <List>
        <ListItem button onClick={handleSubDrawerCloseCategory}>
      <ListItemIcon>
        <IconButton edge="start" color="inherit">
          <CloseIcon onClick={handleSubDrawerCloseCategory} />
        </IconButton>
      </ListItemIcon>
    </ListItem>
          {/* Add sub-categories or links within this sub-drawer */}
          <ListItem button>
            <ListItemText primary="Sub-category 1" className='pt-10' />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sub-category 2" />
          </ListItem>
          {/* Add more sub-categories or links as needed */}
        </List>
      </Drawer>
            <ListItem button>
            <ListItemText
    primary={
        <Typography variant="body2"  >
          <h1 className='font-extrabold hover:underline' onClick={handleSubDrawerCloseCategory}>CATEGORY</h1>
        </Typography>
    }
/>
            </ListItem>
       
            <ListItem button>
            <ListItemText
    primary={
        <Typography variant="body2"  >
           <Link to='/profile'><h1 className='font-extrabold hover:underline'>PROFILE</h1></Link> 
        </Typography>
    }
/>
            </ListItem>
            <ListItem button>
            <ListItemText
    primary={
        <Typography variant="body2"  >
           <Link to='/cart'><h1 className='font-extrabold hover:underline'>CART</h1></Link> 
        </Typography>
    }
/>
            </ListItem>
            <ListItem button>
            <ListItemText
    primary={
        <Typography variant="body2"  >
           <Link to='/whishlist'><h1 className='font-extrabold hover:underline'>WHISH-LIST</h1></Link> 
        </Typography>
    }
/>
            </ListItem>
           
          </List>
        </Drawer>
      </Hidden>
</>);
};

export default NavBar;
