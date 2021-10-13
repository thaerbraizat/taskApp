import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function Header() {
    return (
        <>
            <Nav style={{background:"black"}} as="ul">
<Nav.Item  as="li">
<Nav.Link href="/">Upcoming</Nav.Link>
</Nav.Item>
<Nav.Item as="li">
<Nav.Link href="/Popular">Popular</Nav.Link>
</Nav.Item>

<Nav.Item as="li">
<Nav.Link href="/TopRated">TopRated</Nav.Link>
</Nav.Item>

<Nav.Item as="li">
<Nav.Link href="/Movie">Movie</Nav.Link>
</Nav.Item>
</Nav>
        </>
    )
}



