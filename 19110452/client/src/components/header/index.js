import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Heading } from '@chakra-ui/react'
import { Link } from "react-router-dom";

Header.propTypes = {
    
};

function Header(props) {
    return (
        <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        width={"100%"}
        height={"80px"}
        backgroundColor={"#ffade3"}
        position={"fixed"}
        marginTop = {"-80px"}
        zIndex="10"
        >
            <Heading as="h3">My Blogs</Heading>
            <Flex>
                <Link to={"/blogs"}>Blogs</Link>
                <Link to={"/blogs"}>Blogs</Link>
                <Link to={"/blogs"}>Blogs</Link>
            </Flex>
            <Heading as="h3">Hello! Phan Thanh Tai</Heading>
        </Flex>
    );
}

export default Header;