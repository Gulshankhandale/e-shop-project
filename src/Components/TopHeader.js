import React from 'react'
import Logo from '../assets/Images/shop-logo.png';
import CartIcon from '../assets/Images/cart-icon.png';
import WishListIcon from '../assets/Images/wishlist.png';

function TopHeader() {
  return <>
  <header className="p-3 mb-2 border-bottom">
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
  <strong>50% OFF</strong> You should check in on some of those products below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div className="container">
      
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img className='shop-logo' src={Logo}/>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="I'm searching for..." aria-label="Search"/>
        </form>

        <div>
          <button className='cart-btn position-relative' data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img className='cart-icon' alt='Cart' src={CartIcon}/>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              5
          <span class="visually-hidden">unread messages</span>
          </span>
          </button>
          
          <button className='wishlist-btn position-relative' data-bs-toggle="modal" data-bs-target="#exampleModal1">
          <img className='wishlist-icon' alt='Wishlist' src={WishListIcon}/>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              5
          <span className="visually-hidden">unread messages</span>
          </span>
          </button>
        </div>

        <div className="dropdown text-end account-section">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  {/* Modal 1*/}
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  {/* Modal 1*/}
  {/* Modal 2*/}
  <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Model2
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  {/* Modal 2*/}
  </>
}

export default TopHeader;