const styles = (theme) => ({
    table: {
        minWidth: 650,
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
      root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
      },
      highlight:
        theme.palette.type === 'light'
          ? {
              color: theme.palette.secondary.main,
              
            }
          : {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.secondary.dark,
            },
      title: {
        flex: '1 1 100%',
      },
});

export default styles;