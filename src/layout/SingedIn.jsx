import React from 'react'
import { Dropdown, DropdownMenu, Menu,Image } from 'semantic-ui-react'

export default function SingedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/60034147?v=4"></Image>
                <Dropdown pointing="top right" text="fatma">
                    <DropdownMenu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="info"/>
                    </DropdownMenu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
