import React, { Component } from 'react';
import { Button, Popover } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import './styles/cartFloatingBtn.scss';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class CartFloatingBtn extends Component
{
  render() 
  {
    return (
      <>
        <div className="cartFloatingBtn">
          <Popover content={content} trigger="click contextMenu">
            <Button className="cartBtn" type="primary">
              <div className="cartIcon"><ShoppingCartOutlined /> 12</div> 
            </Button>
          </Popover>
        </div>        
      </>
    );
  }
}
export default CartFloatingBtn;



