import React from "react";
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
    withAuthenticator,
  } from '@aws-amplify/ui-react';

const Home = () => {

    const picAddress = "https://seattleparasailimages195816-staging.s3.us-west-2.amazonaws.com/public/BasicPic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWQY7T2V3ZURYYPG6%2F20221028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221028T234008Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCH1Pm3%2FJUsvDdSEMZATiUL3aTPqCo9EQjLbJDW%2Fb5bh8CIQDXAxtVpoqLV20Cauv3%2FJT2CyuFrOHkzxEwTaiNwXIBzCrEBAg5EAAaDDQ0ODM1MzUyMzA2MyIMLBR6FkBlzEf8urCdKqEE%2BY8eG4fv237H1RvlUTrbE7%2FfIbFeQ9kUqifzi0A3SXMj05H%2BeswTfW3L%2BJjyHSF7wHteI0oDqPwxyrqKS2cPkt9G6o9fw%2FxVwNix9324Z%2BFeanU0WXVD0dC87N%2BQzofpUzpliy%2B9c8QM2CH2D7Lv%2Fr0ieSRlyPseInWxT74khZDKb1j%2BM%2Bx95RTPBhr5DBy8y32Ucp2EEOBEjzFXxphlCd2ekv%2FQnN04bK0fAxx8jvxe%2F8dBIaxYLHxE9VpRRubld2wF7zdS7ANHYVyxWs0uc%2FoSDz7%2FcR2GB%2BvXOblxEkmmWk3HM8itzkYceGfyWvLoYrouuwHKaH3YbJTfqt%2B%2B%2FblLLxeBU4XUq1mIxnBTBM27x%2FiOyHpFf2NKimsDTRLHnK1MlNBXCOb2EXBNOwSA4tL5IMMkpgGA3R935rn88li3xFFVoVo%2FoLmSY62SIF6YrcASRt1MPlAph%2BHPjvPNW51AV5SF3q0F%2Fp3MXyBPBE8nNJKWKgx%2FvAfq%2Bqj74G8xSZzbyJUgcpOtvNcDPS1NB%2B6zNkv1QX7yqruPxqQrXkkUdWi5igLeaZOVlu7BomX0MBeKPygfGAofVetXf4Y1Hr4UmrWYgdCxElqVjEUKK2ZBbq6mPgbHkqOrw25XuJ1aITSk%2Ff7sUeNNXODyNC7I2SZWsNmAkVS6XOSxMj2fB6WNxoAWB3NV2uONKbyVmJCgpKvD2%2FD9%2B6NDPhIOZNttmSow2NDxmgY6hgK9Q%2Br4aFdUFkeutPj6Lgs6cuRGfDSviBNYwro0Ov8Gx3YeTFVQWtfRm6AwNVHlMyLUt9vrGQdiljZ%2FkoJ9OSZHGS6fkGtmIon61%2BNvR9hHNt35kAOb%2FQ7YgDTKZFvWVfkGfoPjQEe3MjZNqoPrtjjgyhDt%2FLBu9OK7Eh8YsDeEevZDSBPiERUSi9QXKXYKaNeaf6jVb3mc4Ddeov1Bp8%2BwJHXvOPV8kDtwdWG7aUmEEV4lR1WmOWUCtsr9C8OvsU%2BOYn4YTHPxIdWSBN1ZzTKpyJC8Pj%2FbVap0rghfLDCb0CpNlyGS2fNqNB13mrHDGK5kBTTWucwdgbNwXQiC7xFrxdmnrCdj&X-Amz-Signature=fdf0fc4b6e9946c3c9b065e2efdc54311374b1a9f640949215ed5459a7f92247&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FmacOS%2F10.14.6%20lang%2Fjs%20md%2Fbrowser%2FChrome_106.0.0.0%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.7.10_js&x-id=GetObject"
    return (
        <div style ={{margin: '0 auto'}}>
            <View>
                  <img
        src={picAddress}
        alt='psail pic'
        style={{ width: 800 }}
      />
      </View>

            
        </div>
    )
}

export default Home