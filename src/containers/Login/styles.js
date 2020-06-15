/** @format */

const styles = (theme) => ({
    
    login: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 4),
        outline: 'none',
    },
    header: {
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      title: {
        color: theme.color.textColor,
        fontWeight: 700,
        textTransform: 'capitalize',
      },
      content: {
        padding: theme.spacing(2),
       
      },
      textField: {
        width: '100%',
    },
});

export default styles;
