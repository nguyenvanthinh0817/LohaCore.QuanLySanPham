const styles = () => ({
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      deleteButton: {
        backgroundColor: '#B22222',
        marginLeft : 8
      },
      hoverRow:{
        "&::hover":{
          backgroundColor: 'red',
        }
      }
});

export default styles;