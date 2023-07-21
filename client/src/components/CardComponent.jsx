import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const CardComponent = ({ title, price, address, no_of_rooms, photos, user }) => {
    return (
        <Card maxW='sm' variant="filled" border="2px solid gray">
            <CardBody>
                <Image
                    src={photos[0]}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        This property is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design with {no_of_rooms} rooms.
                        The property is added by {user.name} at {address}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='100'>
                    <Button variant='solid' colorScheme='red'>
                        Book Now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Preview
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardComponent