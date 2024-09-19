// src/components/Alert.jsx

// import "./Alert.module.css";

// const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];

//   if (outlined) {
//     classNames.push("is-outlined");
//   }

//   if (elevated) {
//     classNames.push("is-elevanted");
//   }

//   return <p className={classNames.join(" ")}>{children}</p>;
// };

// import clsx from "clsx";
// import "./Alert.css";

// const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

// src/components/Alert.jsx
import clsx from "clsx";
// Синтаксис імпорту CSS-модуля
import css from "./Alert.module.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
  // Звертаємось до властивості об'єкта на ім'я класу з файлу CSS-модуля
  return (
    <p
      className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};
