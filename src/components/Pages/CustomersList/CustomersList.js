import { useEffect, useState } from "react";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customers/active")
      .then((res) => res.json())
      .then((response) => {
        setCustomers(response);
      });
  }, []);

  return (
    <div className='table-parent'>
      <div className='table-heading'>
        <div>Customer Name</div>
        {/* <div>Email</div> */}
        <div>Phone</div>
        {/* <div>Address</div> */}
        <div>Shirts</div>
        <div>Pants</div>
        <div>Total Amount</div>
        <div>Advance Amount</div>
        <div>Delivery Data</div>
      </div>
      {customers.map((el) => {
        return (
          <div className='row-data' key={el.customer_id}>
            <div className='row-element'>{`${el.first_name} ${el.last_name}`}</div>
            {/* <div className='row-element'> {el.email}</div> */}
            <div className='row-element'> {el.phone}</div>
            {/* <div className='row-element'> {el.address}</div> */}
            <div className='row-element'>
              {`${el.no_of_shirts} ${el.shirt_material} shirts`}
            </div>
            <div className='row-element'>
              {`${el.no_of_pants} ${el.pant_material} pants`}
            </div>
            <div className='row-element'> {el.total_amount}</div>
            <div className='row-element'> {el.advance_amount}</div>
            <div className='row-element'>
              {" "}
              {el.delivery_date.split("T").shift()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomersList;
