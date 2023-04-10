import React, { useEffect } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reduxFeature/auth/authSlice';

interface Props {
    title: string;
    message: string;
    cancelText: string;
    confirmText: string;
    alertShow: boolean;
    onCancel: () => void;
    action: () => void;
}

const Alerts = ({
    title,
    message,
    cancelText,
    confirmText,
    alertShow,
    onCancel,
    action,
}: Props) => {
    const [showAlertModal, setShowAlertModal] = useState(false);

    useEffect(() => {
        if (alertShow) {
            setShowAlertModal(true);
        }
    }, [alertShow]);

    const hideAlert = () => {
        setShowAlertModal(false);
    };

    const handleCancel = () => {
        hideAlert();
        onCancel();
    };

    return (
        <AwesomeAlert
            show={showAlertModal}
            showProgress={false}
            title={title}
            message={message}
            showConfirmButton={true}
            closeOnHardwareBackPress={false}
            closeOnTouchOutside={true}
            showCancelButton={true}
            cancelText={cancelText}
            confirmText={confirmText}
            cancelButtonColor="#ca0414"
            confirmButtonColor="#3a00a7"
            onConfirmPressed={() => {
                hideAlert();
                action();
            }}
            onCancelPressed={handleCancel}
        />
    );
};

export default Alerts;
