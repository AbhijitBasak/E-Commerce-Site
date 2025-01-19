import React from 'react'


function Footer() {
  return (
    <>
      <footer class="section-footer">
        <div class="footer-container container">
          <div class="content_1">
            <h2>Giftos</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
              Consequatur porro molestiae natus quasi. <br />Numquam repellat minima id facilis.
            </p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div class="content_2">
            <h4>SHOPPING</h4>
            <a href="#">Computer Store</a>
            <a href="#">Laptop Store</a>
            <a href="#">Accessories</a>
            <a href="#">Sales & Discount</a>
          </div>
          <div class="content_3">
            <h4>Experience</h4>
            <a href="./contact.html">Contact Us</a>
            <a href="" target="_blank"> Payment Method </a>
            <a href="" target="_blank"> Delivery </a>
            <a href="" target="_blank"> Return and Exchange </a>
          </div>
          <div class="content_4">
            <h4>NEWSLETTER</h4>
            <p>
              Be the first to know about new
              <br />
              arrivals, sales & promos!
            </p>
            <div class="f-mail">
              <input type="email" placeholder="Your Email" />
              <i class="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div class="f-design">
          <div class="f-design-txt">
            <p>Design and Code by Mr: AJ</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer