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
}

const Alerts = ({
    title,
    message,
    cancelText,
    confirmText,
    alertShow,
    onCancel,
}: Props) => {
    const dispatch = useDispatch();

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
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            cancelText={cancelText}
            confirmText={confirmText}
            confirmButtonColor="#db683b"
            cancelButtonColor="#9590a3"
            onCancelPressed={handleCancel}
            onConfirmPressed={() => {
                hideAlert();
                dispatch(logout());
            }}
        />
    );
};

export default Alerts;
