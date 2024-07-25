import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white mt-2">
        <div class="container py-4">
          <div class="row">
            <div class="col-md-2 mb-3">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li><a href="#" class="text-white">Home</a></li>
                <li><a href="#" class="text-white">Services</a></li>
                <li><a href="#" class="text-white">Portfolio</a></li>
                <li><a href="#" class="text-white">Contact</a></li>
              </ul>
            </div>
            <div class="col-md-3 mb-3">
              <h5>Contact Us</h5>
              <p>1234 Event Lane</p>
              <p> City, State 56789</p>
              <p> Phone: (123) 456-7890</p>
              <p> Email: info@magicmoments.com</p>
              
            </div>
          </div>
          <div class="text-center mt-3">
            <p>&copy; 2024 Magic Moments. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
