import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import { Icon } from '@mui/material';

function NavBar() {
    return (
        <div className='NavBar'>
            <header>
                <div>
                    <h2>a | x <span>.</span></h2>

                </div>

                <div className='centerMenu'>

                <button>home</button>
                <button>product</button>
                <button>about</button>
                <button>contact</button>
                </div>
                

                <div>
                  <Icon>favorite_border</Icon>               
                  <Icon>shopping_bag</Icon>               
                </div>

            </header>
        </div>
    )
}

export default NavBar
