import { StyleSheet } from 'react-native';

export const webStyles = StyleSheet.create(
    {
        profileButton: {
            color: "#FFFFFF",
            backgroundColor: "#EFD0DD",
            margin: "auto",
            width: "90%",
            marginBottom: "10px",
            marginTop: "10px"
            // borderRadius: 20
        },
        vendorDetailsOrderNowButton: {
            color: "#FFFFFF",
            backgroundColor: "#EFD0DD",
            margin: "auto",
            width: "90%",
            // borderRadius: 20
        },
        vendorDetailsDescriptionText: {
            margin: "4%"
        },
        vendorPlaceholder: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0, 0.60)'
        },
        vendorTitle: {
            // backgroundColor: "black",
            margin: "auto",
            color: "#FFFFFF",
            fontWeight: "460"
        },
        eventCarousel: {
            backgroundColor: "#FFFFFF",
            margin: "1%",
            borderRadius: 10,
        },
        defaultColor: {
            color: "#ED1C40"
        },
        highlightedContainer: {
            backgroundColor: "#EFD0DD",
            width: "100%"
        },
        carouselText: {
            fontSize: '0.65em',
            fontWeight: '500',
            marginBottom: '1em',
            // width: "100%",
            // textAlign: "left"
        },
        container: {
            // display: 'flex',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            overflow: 'visible'
        },
        fieldContainer: {
            width: '100%'
        },
        input: {
            textAlign: 'center',
            backgroundColor: '#FFF',
            borderBottomWidth: '1px',
            borderColor: '#B5B4B0'
        },
        inputTitle: {
            color: '#B5B4B0',
            textAlign: 'left',
            alignItems: 'left',
            fontSize: '1rem',
            marginBottom: '0.7em'
        },
        inputContainer: {
            width: '100%',
            marginBottom: '2em'
        },
        bigTitle: {
            fontSize: '0.7em',
            fontWeight: '500',
            marginBottom: '1em',
            marginLeft: "2%",
            marginTop: "2%"
        }
    });