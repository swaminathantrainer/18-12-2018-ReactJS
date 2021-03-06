import React from 'react';

export default (props) => {
    const icon = props.icon;
    const onInputChanged = props.onInputChanged;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#f1f1f1',
            border: '1px solid #d3d3d3',
            borderRadius: '5px',
            marginTop: '15px'
        }}>
            <img src={icon} />
            <input type="email"
                placeholder="test@email.com"
                onChange={(event) => onInputChanged(event.target.value)}
                style={{
                    flex: 1,
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'none',
                    borderImage: 'none',
                    backgroundColor: '#f1f1f1',
                    fontSize: '18px',
                    marginLeft: '15px'
                }} />
        </div>
    );
};