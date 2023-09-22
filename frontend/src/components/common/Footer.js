import React from "react";
import { withRouter } from "react-router"
import {Text, VStack} from '@chakra-ui/react';


function Footer(props) {

    return(
        <React.Fragment>
            <VStack 
                borderTop="1px" borderColor="gray.400"
                w="100%" h="40px" bg="gray.100">
            <Text>© Copyright - Ayush Shah</Text>
            </VStack>
        </React.Fragment>
    )

}

export default withRouter(Footer);