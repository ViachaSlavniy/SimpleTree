const color = '339af0';
const style = {
    width: '20px',
    height: '20px',
    color: color
}

const plusMinusStyle = {
    width: '16px',
    color: color
}

export const closedFolderIcon = () => {
    return (
        <svg
            style={style}
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="folder"
            className="svg-inline--fa fa-folder fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z">
            </path>
        </svg>
    )
}

export const openedFolderIcon = () => {
    return (
        <svg
            style={style}
            aria-hidden="true"
             focusable="false"
             data-prefix="far"
             data-icon="folder-open"
             className="svg-inline--fa fa-folder-open fa-w-18"
             role="img"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 576 512">
            <path fill="currentColor"
                  d="M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z">

            </path>
        </svg>
    )
}

export const fileIcon = () => {
    return (
        <svg
            style={style}
            aria-hidden="true" focusable="false" data-prefix="far" data-icon="file"
             className="svg-inline--fa fa-file fa-w-12"
             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="currentColor"
                  d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z">
            </path>
        </svg>
    )
}

export const plusBlock = () => {
    return (
        <svg
            style={plusMinusStyle}
            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-square"
             className="svg-inline--fa fa-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
            <path fill="currentColor"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z">
            </path>
        </svg>
    )
}

export const minusBlock = () => {
    return (
        <svg
            style={plusMinusStyle}
            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-square"
             className="svg-inline--fa fa-minus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
            <path fill="currentColor"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z">
            </path>
        </svg>
    )
}