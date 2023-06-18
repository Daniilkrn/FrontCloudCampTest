import React from 'react'

const SvgSpritePlus = () => {
    return (
        <>
            <svg style={{ display: 'none'}}>
                <symbol id="plus"  width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6.99998 1C6.99998 0.447715 6.55226 0 5.99998 0C5.44769 0 4.99998 0.447715 4.99998 1V4.99998H1C0.447716 4.99998 0 5.44769 0 5.99998C0 6.55226 0.447715 6.99998 1 6.99998H4.99998V11C4.99998 11.5522 5.44769 12 5.99998 12C6.55226 12 6.99998 11.5522 6.99998 11V6.99998H11C11.5522 6.99998 12 6.55226 12 5.99998C12 5.44769 11.5522 4.99998 11 4.99998H6.99998V1Z" fill="#5558FA" />
                </symbol>
            </svg>
            <svg  width="12" height="12" viewBox="0 0 12 12"><use href="#plus" /></svg>
        </>
    )
}

export default SvgSpritePlus