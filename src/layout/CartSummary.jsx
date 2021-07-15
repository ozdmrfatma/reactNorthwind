import React from 'react'
import { Dropdown} from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Language'>
                <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Turkish</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
