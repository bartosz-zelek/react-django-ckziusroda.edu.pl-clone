import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";

const Alerts = () => {
  const alerts = useSelector((state) => state.alerts);
  const _alert = useAlert();

  useEffect(() => {
    if (alerts.length > 0) {
      alerts.map((alert) => {
        if (alert.type === "error") {
          if (alert.msg.username) {
            alert.msg.username.map((alert_username) => {
              _alert.error(`Nazwa użytkownika: ${alert_username}`);
            });
          }
          if (alert.msg.password) {
            alert.msg.password.map((alert_password) => {
              _alert.error(`Hasło: ${alert_password}`);
            });
          }
          if (alert.msg.non_field_errors) {
            _alert.error("Niepoprawne dane logowania");
          }
          if (alert.msg.title) {
            alert.msg.title.map((alert_title) => {
              _alert.error(`Tytuł: ${alert_title}`);
            });
          }
          if (alert.msg.content) {
            alert.msg.content.map((alert_content) => {
              _alert.error(`Treść: ${alert_content}`);
            });
          }
          if (alert.msg.category) {
            alert.msg.category.map(() => {
              _alert.error("Musisz wybrać kategorię.");
            });
          }
          if (alert.msg.name) {
            alert.msg.name.map((name_alert) => {
              _alert.error(`Nazwa: ${name_alert}`);
            });
          }
          if (alert.msg.document) {
            alert.msg.document.map((document_alert) => {
              _alert.error(`Plik: ${document_alert}`);
            });
          }
        }
        if (alert.type === "success") {
          if (alert.msg.logged) {
            alert.msg.logged.map((alert_logged) => {
              _alert.success(alert_logged);
            });
          }
          if (alert.msg.post_created) {
            alert.msg.post_created.map(() => {
              _alert.success("Pomyślnie dodano post.");
            });
          }
          if (alert.msg.category_added) {
            alert.msg.category_added.map((category_added_alert) => {
              _alert.success(category_added_alert);
            });
          }
          if (alert.msg.file_uploaded) {
            alert.msg.file_uploaded.map((file_uploaded_alert) => {
              _alert.success(file_uploaded_alert);
            });
          }
        }
        if (alert.type === "warning") {
          if (alert.msg.no_permissions) {
            alert.msg.no_permissions.map((alert_no_permissions) => {
              _alert.info(alert_no_permissions);
            });
          }
        }
      });
    }
  }, [alerts]);

  return <Fragment />;
};

export default Alerts;
