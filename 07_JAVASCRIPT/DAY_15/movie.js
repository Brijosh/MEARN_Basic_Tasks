/* Q) Create a class MovieTicket with the following specifications:

      1) A constructor that initializes the movie name, the theater name, the number of seats, and the price per ticket.
      2) A method bookTickets that decreases the number of available seats by the number of tickets requested and returns the total cost.
      3) A method printDetails that prints the movie name, the theater name, the number of available seats, and the price per ticket.
      4) A method isAvailable that returns true if the requested number of seats are available, otherwise returns false.
      5) Add a method cancelTickets that increases the number of available seats by the number of tickets canceled and returns the refund amount.
      6) Add a method applyDiscount that applies a discount to the price per ticket for a promotional offer.

*/

class MovieTicket
{
      constructor(movie,theater,seats,price)
      {
            this.movieName=movie;
            this.theaterName=theater;
            this.numSeats=seats;
            this.priceTicket=price;
            console.log(`\nMovie details added\n`);
      }
      bookTicket(tickets)
      {
            this.numSeats-=tickets;
            return `Total Cost of ${tickets} Tickets : ${tickets*this.priceTicket}\n`
      }
      movieDetails()
      {
            console.log(`Movie Name : ${this.movieName}`);
            console.log(`Theater Name : ${this.theaterName}`);
            console.log(`Available Seats : ${this.numSeats}`);
            console.log(`Price per Ticket : ${this.priceTicket}\n`);
      }
      availableSeats(tickets)
      {
            if(tickets<=this.numSeats)
            {
                  return true;
            }
            else
            {
                  return false;
            }
      }
      refundTickets(tickets)
      {
            this.numSeats+=tickets;
            return `\nRefund amount for ${tickets} Tickets : ${tickets*this.priceTicket} `
      }
      promotion(offer)
      {
            this.priceTicket-=((offer/100)*this.priceTicket);
            return `\nDiscounted price : ${this.priceTicket}`
      }

}
booking= new MovieTicket('Godfather','Four Star Movies',200,140)
console.log(booking.bookTicket(75)); 
booking.movieDetails();
console.log(booking.availableSeats(150));
console.log(booking.refundTickets(70));
console.log(booking.promotion(50));