import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import RenderProduct from './RenderProduct';
import TotalCart from './TotalCart';

interface Product  {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    veterinaryId: string
    productCategoryId: string
    productCategory: {
      id: string
      name: string
    },
    productImage: IMG[]
  }
  interface IMG {
imageUrl:string
  }

  interface Props {
    cart:Product[]
  }

const CardProduct = ({cart}: Props) => {
    const [total, setTotal] = useState(0)
const totalCalc = ()=>{
let tot = 0
cart.forEach(car=>{tot = tot + car.price})
setTotal(tot)
}

useEffect(() => {
  totalCalc()
}, [])


    return (
        <View
            style={{
                marginTop: 5,
                height: '100%',
                justifyContent: 'space-between',
                paddingBottom: 210,
                backgroundColor: 'white',
            }}
        >
            <View
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#abb1ae',
                    borderTopWidth: 1,
                    borderTopColor: '#abb1ae',
                    marginVertical: 5,
                }}
            >
                <Text
                    style={{
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        marginVertical: 15,
                        marginHorizontal: 10,
                    }}
                >
                    {cart.length} artículos
                </Text>
            </View>
            <ScrollView>
                {cart.map(car=><RenderProduct product={car} /> )}
            </ScrollView>
            <TotalCart total={total} />
        </View>
    );
};

export default CardProduct;
