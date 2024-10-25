/*
for this functions
props {
    huntersHeaderCustomTextValue
    textColor
}

*/

import './HeaderText.css'

const randomObject = {
    color: 'yellow'
}

const shape = randomObject.shape

export default function HeaderText(props) {

    const text = props.huntersHeaderCustomTextValue;
    const textColor = props.textColor;

    let headerClassName = 'baseTextColor';

    if(textColor === 'yellow') {
        headerClassName = 'yellowTextColor'
    } else if (textColor === 'red') {
        headerClassName = 'redTextColor'
    }

    console.log("What the text says:", text)

    //className='baseTextColor' === className={headerClassName}
    return (
        <h1 className={headerClassName}>{text}</h1>
    )
}