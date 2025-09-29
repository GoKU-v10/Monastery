import React, { useState, useRef } from 'react';
import Button from '../../../components/ui/Button';
import { QRCodeSVG as QRCode } from 'qrcode.react';

const BookingModal = ({ event, onClose }) => {
  const [step, setStep] = useState(1);
  const [ticketType, setTicketType] = useState('solo');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const ticketRef = useRef(null);

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextStep();
  };

  const handleBooking = () => {
    const bookingDetails = {
      event,
      ticketType,
      name,
      email,
      paymentMethod
    };
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, bookingDetails]));
    handleNextStep();
  };

  const downloadTicket = () => {
    const ticket = ticketRef.current.innerHTML;
    const blob = new Blob([ticket], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const addToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//My Monastry//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${event.id}@mymonastery.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${event.date.replace(/-/g, '')}T000000Z
DTEND:${event.date.replace(/-/g, '')}T235959Z
SUMMARY:${event.name}
DESCRIPTION:${event.description}
LOCATION:${event.monastery}, ${event.location}
END:VEVENT
END:VCALENDAR}`;
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'event.ics';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-2xl max-w-lg w-full">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-primary">Book Your Spot for {event.name}</h2>
            <Button onClick={onClose} variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>

          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Step 1: Select Ticket Type</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" value="solo" checked={ticketType === 'solo'} onChange={() => setTicketType('solo')} className="mr-2" />
                  Solo (1 person)
                </label>
                <label className="flex items-center">
                  <input type="radio" value="family" checked={ticketType === 'family'} onChange={() => setTicketType('family')} className="mr-2" />
                  Family (up to 4 people)
                </label>
                <label className="flex items-center">
                  <input type="radio" value="group" checked={ticketType === 'group'} onChange={() => setTicketType('group')} className="mr-2" />
                  Guided Group (10+ people)
                </label>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Max seats per booking: 10</p>
              <div className="mt-6 flex justify-end">
                <Button onClick={handleNextStep}>Next</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold mb-4">Step 2: Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded bg-input" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 rounded bg-input" required />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button onClick={handlePrevStep} variant="outline">Back</Button>
                <Button type="submit">Next</Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Step 3: Payment</h3>
              <p>Select your preferred payment method:</p>
              <div className="space-y-2 mt-4">
                <label className="flex items-center">
                  <input type="radio" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="mr-2" />
                  UPI
                </label>
                <label className="flex items-center">
                  <input type="radio" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="mr-2" />
                  Credit/Debit Card
                </label>
                <label className="flex items-center">
                  <input type="radio" value="wallet" checked={paymentMethod === 'wallet'} onChange={() => setPaymentMethod('wallet')} className="mr-2" />
                  Digital Wallet
                </label>
              </div>
              <div className="mt-6 flex justify-between">
                <Button onClick={handlePrevStep} variant="outline">Back</Button>
                <Button onClick={handleBooking}>Confirm Booking</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center" ref={ticketRef}>
              <h3 className="text-2xl font-bold text-green-500 mb-4">Booking Confirmed!</h3>
              <p className="mb-2">Thank you, {name}, for your booking.</p>
              <p className="mb-4">A confirmation has been sent to {email}.</p>
              <div className="p-4 bg-white rounded-lg inline-block">
                <QRCode value={`Event: ${event.name}, Name: ${name}, Email: ${email}`} />
              </div>
              <div className="mt-6 flex flex-col items-center space-y-2">
                <Button onClick={downloadTicket}>Download Ticket</Button>
                <Button onClick={addToCalendar}>Add to Calendar</Button>
                <Button onClick={onClose} variant="outline">Close</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
