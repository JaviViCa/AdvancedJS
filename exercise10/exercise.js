const order = {
    // customer: {
    //     address: {
    //         city: 1
    //     }
    // }
};

if (order?.customer?.address?.city) {
    console.log(order.customer.address.city);
}else{
    console.log('City is required');
}