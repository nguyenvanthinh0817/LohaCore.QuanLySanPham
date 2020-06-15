const styles = () => ({
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      deleteButton: {
        backgroundColor: '#B22222',
        marginLeft : 8,
        "&:hover":{
          backgroundColor: '#8A0808 ',
        }
      },
      viewButton: {
        backgroundColor: '#088A29',
        marginRight : 8,
        "&:hover":{
          backgroundColor: '#0B610B',
        }
      },
});

export default styles;