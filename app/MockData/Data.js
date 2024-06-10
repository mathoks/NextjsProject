
import { faker} from '@faker-js/faker';


export  function Products(){
return {
    productId: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(200, 200),
    category: faker.commerce.department(),
    rating: faker.number.int(0,5),
}
}


export  function  User() {

  return {
    userId: faker.string.uuid(),
    Storename: faker.internet.userName(),
    storeDescription: faker.lorem.sentence(10,100),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    address: faker.location.streetAddress(),
    ratings: faker.number.int(0,5),
    Phone: faker.phone.number(),
    product: Array.from({length: 5},Products),

        subscriptionTier:  faker.helpers.arrayElement(['free', 'basic', 'business']),
    
  };
}

export const users =  faker.helpers.multiple(User, {
  count: 20
});



    


