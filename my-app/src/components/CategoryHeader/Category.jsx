import styles from "./Category.module.css";

// const categories = [
//   { id: 0, name: "Для сім’ї" },
//   { id: 1, name: "Для компанії" },
//   { id: 2, name: "Для дітей" },
//   { id: 3, name: "Для вечірок" },
//   { id: 4, name: "Для двох" },
//   { id: 5, name: "В дорогу" },
//   { id: 6, name: "Для дорослих" },
// ];

const Category = () => {
  return (
    <div>
      <ul className={styles.categoryList}>
        <li className={styles.categoryListItem}>
          <div>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0L22 8.25L20.8 9.85L19 8.5V18H3V8.5L1.2 9.85L0 8.25L11 0ZM6.35 9.05C6.35 9.93333 6.825 10.875 7.775 11.875C8.725 12.875 9.8 13.9167 11 15C12.2 13.9167 13.275 12.875 14.225 11.875C15.175 10.875 15.65 9.93333 15.65 9.05C15.65 8.31667 15.4 7.70833 14.9 7.225C14.4 6.74167 13.8 6.5 13.1 6.5C12.6667 6.5 12.2708 6.5875 11.9125 6.7625C11.5542 6.9375 11.25 7.16667 11 7.45C10.75 7.16667 10.4375 6.9375 10.0625 6.7625C9.6875 6.5875 9.3 6.5 8.9 6.5C8.2 6.5 7.6 6.74167 7.1 7.225C6.6 7.70833 6.35 8.31667 6.35 9.05ZM17 16V7L11 2.5L5 7V16H17Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Для сім’ї</p>
        </li>
        <li className={styles.categoryListItem}>
          <div>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM18 16V13C18 12.2667 17.7958 11.5625 17.3875 10.8875C16.9792 10.2125 16.4 9.63333 15.65 9.15C16.5 9.25 17.3 9.42083 18.05 9.6625C18.8 9.90417 19.5 10.2 20.15 10.55C20.75 10.8833 21.2083 11.2542 21.525 11.6625C21.8417 12.0708 22 12.5167 22 13V16H18ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM18 4C18 5.1 17.6083 6.04167 16.825 6.825C16.0417 7.60833 15.1 8 14 8C13.8167 8 13.5833 7.97917 13.3 7.9375C13.0167 7.89583 12.7833 7.85 12.6 7.8C13.05 7.26667 13.3958 6.675 13.6375 6.025C13.8792 5.375 14 4.7 14 4C14 3.3 13.8792 2.625 13.6375 1.975C13.3958 1.325 13.05 0.733333 12.6 0.2C12.8333 0.116667 13.0667 0.0625 13.3 0.0375C13.5333 0.0125 13.7667 0 14 0C15.1 0 16.0417 0.391667 16.825 1.175C17.6083 1.95833 18 2.9 18 4ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Для двох</p>
        </li>
        <li className={styles.categoryListItem}>
          <div>
            <svg
              width="24"
              height="12"
              viewBox="0 0 24 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12V10.425C0 9.70833 0.366667 9.125 1.1 8.675C1.83333 8.225 2.8 8 4 8C4.21667 8 4.425 8.00417 4.625 8.0125C4.825 8.02083 5.01667 8.04167 5.2 8.075C4.96667 8.425 4.79167 8.79167 4.675 9.175C4.55833 9.55833 4.5 9.95833 4.5 10.375V12H0ZM6 12V10.375C6 9.84167 6.14583 9.35417 6.4375 8.9125C6.72917 8.47083 7.14167 8.08333 7.675 7.75C8.20833 7.41667 8.84583 7.16667 9.5875 7C10.3292 6.83333 11.1333 6.75 12 6.75C12.8833 6.75 13.6958 6.83333 14.4375 7C15.1792 7.16667 15.8167 7.41667 16.35 7.75C16.8833 8.08333 17.2917 8.47083 17.575 8.9125C17.8583 9.35417 18 9.84167 18 10.375V12H6ZM19.5 12V10.375C19.5 9.94167 19.4458 9.53333 19.3375 9.15C19.2292 8.76667 19.0667 8.40833 18.85 8.075C19.0333 8.04167 19.2208 8.02083 19.4125 8.0125C19.6042 8.00417 19.8 8 20 8C21.2 8 22.1667 8.22083 22.9 8.6625C23.6333 9.10417 24 9.69167 24 10.425V12H19.5ZM8.125 10H15.9C15.7333 9.66667 15.2708 9.375 14.5125 9.125C13.7542 8.875 12.9167 8.75 12 8.75C11.0833 8.75 10.2458 8.875 9.4875 9.125C8.72917 9.375 8.275 9.66667 8.125 10ZM4 7C3.45 7 2.97917 6.80417 2.5875 6.4125C2.19583 6.02083 2 5.55 2 5C2 4.43333 2.19583 3.95833 2.5875 3.575C2.97917 3.19167 3.45 3 4 3C4.56667 3 5.04167 3.19167 5.425 3.575C5.80833 3.95833 6 4.43333 6 5C6 5.55 5.80833 6.02083 5.425 6.4125C5.04167 6.80417 4.56667 7 4 7ZM20 7C19.45 7 18.9792 6.80417 18.5875 6.4125C18.1958 6.02083 18 5.55 18 5C18 4.43333 18.1958 3.95833 18.5875 3.575C18.9792 3.19167 19.45 3 20 3C20.5667 3 21.0417 3.19167 21.425 3.575C21.8083 3.95833 22 4.43333 22 5C22 5.55 21.8083 6.02083 21.425 6.4125C21.0417 6.80417 20.5667 7 20 7ZM12 6C11.1667 6 10.4583 5.70833 9.875 5.125C9.29167 4.54167 9 3.83333 9 3C9 2.15 9.29167 1.4375 9.875 0.8625C10.4583 0.2875 11.1667 0 12 0C12.85 0 13.5625 0.2875 14.1375 0.8625C14.7125 1.4375 15 2.15 15 3C15 3.83333 14.7125 4.54167 14.1375 5.125C13.5625 5.70833 12.85 6 12 6ZM12 4C12.2833 4 12.5208 3.90417 12.7125 3.7125C12.9042 3.52083 13 3.28333 13 3C13 2.71667 12.9042 2.47917 12.7125 2.2875C12.5208 2.09583 12.2833 2 12 2C11.7167 2 11.4792 2.09583 11.2875 2.2875C11.0958 2.47917 11 2.71667 11 3C11 3.28333 11.0958 3.52083 11.2875 3.7125C11.4792 3.90417 11.7167 4 12 4Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Для компанії</p>
        </li>
        <li className={styles.categoryListItem}>
          <div>
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 19C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H4V1.5C4 1.08333 4.14583 0.729167 4.4375 0.4375C4.72917 0.145833 5.08333 0 5.5 0H8.5C8.91667 0 9.27083 0.145833 9.5625 0.4375C9.85417 0.729167 10 1.08333 10 1.5V4H12C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6V17C14 17.55 13.8042 18.0208 13.4125 18.4125C13.0208 18.8042 12.55 19 12 19C12 19.2833 11.9042 19.5208 11.7125 19.7125C11.5208 19.9042 11.2833 20 11 20C10.7167 20 10.4792 19.9042 10.2875 19.7125C10.0958 19.5208 10 19.2833 10 19H4C4 19.2833 3.90417 19.5208 3.7125 19.7125C3.52083 19.9042 3.28333 20 3 20C2.71667 20 2.47917 19.9042 2.2875 19.7125C2.09583 19.5208 2 19.2833 2 19ZM2 17H12V6H2V17ZM3 16H4.5V7H3V16ZM6.25 16H7.75V7H6.25V16ZM9.5 16H11V7H9.5V16ZM5.5 4H8.5V1.5H5.5V4Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>В дорогу</p>
        </li>
        <li className={styles.categoryListItem}>
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 8.75C11.15 8.75 10.8542 8.62917 10.6125 8.3875C10.3708 8.14583 10.25 7.85 10.25 7.5C10.25 7.15 10.3708 6.85417 10.6125 6.6125C10.8542 6.37083 11.15 6.25 11.5 6.25C11.85 6.25 12.1458 6.37083 12.3875 6.6125C12.6292 6.85417 12.75 7.15 12.75 7.5C12.75 7.85 12.6292 8.14583 12.3875 8.3875C12.1458 8.62917 11.85 8.75 11.5 8.75ZM6.5 8.75C6.15 8.75 5.85417 8.62917 5.6125 8.3875C5.37083 8.14583 5.25 7.85 5.25 7.5C5.25 7.15 5.37083 6.85417 5.6125 6.6125C5.85417 6.37083 6.15 6.25 6.5 6.25C6.85 6.25 7.14583 6.37083 7.3875 6.6125C7.62917 6.85417 7.75 7.15 7.75 7.5C7.75 7.85 7.62917 8.14583 7.3875 8.3875C7.14583 8.62917 6.85 8.75 6.5 8.75ZM9 14C8 14 7.09583 13.725 6.2875 13.175C5.47917 12.625 4.88333 11.9 4.5 11H13.5C13.1167 11.9 12.5208 12.625 11.7125 13.175C10.9042 13.725 10 14 9 14ZM9 18C7.75 18 6.57917 17.7625 5.4875 17.2875C4.39583 16.8125 3.44583 16.1708 2.6375 15.3625C1.82917 14.5542 1.1875 13.6042 0.7125 12.5125C0.2375 11.4208 0 10.25 0 9C0 7.75 0.2375 6.57917 0.7125 5.4875C1.1875 4.39583 1.82917 3.44583 2.6375 2.6375C3.44583 1.82917 4.39583 1.1875 5.4875 0.7125C6.57917 0.2375 7.75 0 9 0C10.25 0 11.4208 0.2375 12.5125 0.7125C13.6042 1.1875 14.5542 1.82917 15.3625 2.6375C16.1708 3.44583 16.8125 4.39583 17.2875 5.4875C17.7625 6.57917 18 7.75 18 9C18 10.25 17.7625 11.4208 17.2875 12.5125C16.8125 13.6042 16.1708 14.5542 15.3625 15.3625C14.5542 16.1708 13.6042 16.8125 12.5125 17.2875C11.4208 17.7625 10.25 18 9 18ZM9 16C10.9333 16 12.5833 15.3167 13.95 13.95C15.3167 12.5833 16 10.9333 16 9C16 7.06667 15.3167 5.41667 13.95 4.05C12.5833 2.68333 10.9333 2 9 2H8.7C8.6 2 8.5 2.01667 8.4 2.05C8.3 2.15 8.23333 2.25833 8.2 2.375C8.16667 2.49167 8.15 2.61667 8.15 2.75C8.15 3.1 8.27083 3.39583 8.5125 3.6375C8.75417 3.87917 9.05 4 9.4 4C9.55 4 9.6875 3.975 9.8125 3.925C9.9375 3.875 10.0667 3.85 10.2 3.85C10.4 3.85 10.5667 3.925 10.7 4.075C10.8333 4.225 10.9 4.4 10.9 4.6C10.9 4.98333 10.7208 5.22917 10.3625 5.3375C10.0042 5.44583 9.68333 5.5 9.4 5.5C8.65 5.5 8.00417 5.22917 7.4625 4.6875C6.92083 4.14583 6.65 3.5 6.65 2.75V2.6C6.65 2.55 6.65833 2.48333 6.675 2.4C5.29167 2.9 4.16667 3.74167 3.3 4.925C2.43333 6.10833 2 7.46667 2 9C2 10.9333 2.68333 12.5833 4.05 13.95C5.41667 15.3167 7.06667 16 9 16Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Для дітей</p>
        </li>
        <li className={styles.categoryListItem}>
          <div>
            <svg
              width="27"
              height="13"
              viewBox="0 0 27 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.608 12H4.192V5.392C4.192 5.21067 4.192 4.98667 4.192 4.72C4.20267 4.45333 4.21333 4.176 4.224 3.888C4.23467 3.6 4.24533 3.344 4.256 3.12C4.20267 3.184 4.08533 3.30133 3.904 3.472C3.73333 3.632 3.57333 3.776 3.424 3.904L2.112 4.96L0.944 3.504L4.624 0.575999H6.608V12ZM13.7323 0.431999C14.3936 0.431999 14.9963 0.533333 15.5403 0.735999C16.0949 0.938666 16.5376 1.24267 16.8683 1.648C17.2096 2.05333 17.3802 2.56533 17.3802 3.184C17.3802 3.64267 17.2896 4.048 17.1083 4.4C16.9269 4.74133 16.6816 5.04 16.3723 5.296C16.0736 5.552 15.7269 5.776 15.3323 5.968C15.7376 6.18133 16.1216 6.432 16.4843 6.72C16.8576 6.99733 17.1563 7.328 17.3802 7.712C17.6149 8.08533 17.7323 8.528 17.7323 9.04C17.7323 9.66933 17.5616 10.2187 17.2203 10.688C16.8896 11.1573 16.4203 11.52 15.8123 11.776C15.2149 12.032 14.5216 12.16 13.7323 12.16C12.8789 12.16 12.1536 12.0373 11.5563 11.792C10.9589 11.5467 10.5003 11.1947 10.1803 10.736C9.87092 10.2773 9.71625 9.73333 9.71625 9.104C9.71625 8.58133 9.81225 8.128 10.0043 7.744C10.2069 7.36 10.4736 7.02933 10.8043 6.752C11.1349 6.464 11.5029 6.224 11.9083 6.032C11.5669 5.81867 11.2576 5.57867 10.9803 5.312C10.7029 5.03467 10.4789 4.72533 10.3083 4.384C10.1483 4.032 10.0683 3.62667 10.0683 3.168C10.0683 2.56 10.2389 2.05333 10.5803 1.648C10.9216 1.24267 11.3696 0.938666 11.9243 0.735999C12.4896 0.533333 13.0923 0.431999 13.7323 0.431999ZM11.9563 8.96C11.9563 9.376 12.1003 9.71733 12.3883 9.984C12.6869 10.2507 13.1243 10.384 13.7003 10.384C14.1056 10.384 14.4363 10.3253 14.6923 10.208C14.9589 10.0907 15.1563 9.92533 15.2843 9.712C15.4229 9.49867 15.4923 9.25333 15.4923 8.976C15.4923 8.688 15.4069 8.43733 15.2363 8.224C15.0656 8 14.8523 7.80267 14.5963 7.632C14.3509 7.45067 14.0949 7.28533 13.8283 7.136L13.6203 7.024C13.2896 7.17333 12.9963 7.344 12.7403 7.536C12.4949 7.728 12.3029 7.94133 12.1643 8.176C12.0256 8.4 11.9563 8.66133 11.9563 8.96ZM13.7163 2.192C13.3216 2.192 12.9909 2.29333 12.7243 2.496C12.4683 2.69867 12.3403 2.98667 12.3403 3.36C12.3403 3.616 12.4043 3.84533 12.5323 4.048C12.6603 4.24 12.8309 4.41067 13.0443 4.56C13.2576 4.69867 13.4869 4.832 13.7323 4.96C13.9776 4.84267 14.2016 4.71467 14.4043 4.576C14.6176 4.43733 14.7883 4.272 14.9163 4.08C15.0443 3.87733 15.1083 3.63733 15.1083 3.36C15.1083 2.98667 14.9749 2.69867 14.7083 2.496C14.4523 2.29333 14.1216 2.192 13.7163 2.192ZM23.7365 5.504H26.7605V7.216H23.7365V10.224H22.0245V7.216H19.0005V5.504H22.0245V2.464H23.7365V5.504Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Для дорослих</p>
        </li>
        <li className={styles.categoryListItem}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20L4.64037 6.34146L12.993 15.122L0 20ZM3.06265 16.7805L9.60557 14.3415L5.38283 9.90244L3.06265 16.7805ZM11.6473 10.7805L10.6729 9.7561L15.8701 4.29268C16.365 3.77236 16.9606 3.5122 17.6566 3.5122C18.3527 3.5122 18.9482 3.77236 19.4432 4.29268L20 4.87805L19.0255 5.90244L18.4687 5.31707C18.2521 5.08943 17.9814 4.97561 17.6566 4.97561C17.3318 4.97561 17.0611 5.08943 16.8445 5.31707L11.6473 10.7805ZM7.93504 6.87805L6.96056 5.85366L7.5174 5.26829C7.73395 5.04065 7.84223 4.76423 7.84223 4.43902C7.84223 4.11382 7.73395 3.8374 7.5174 3.60976L6.91415 2.97561L7.88863 1.95122L8.49188 2.58537C8.98685 3.10569 9.23434 3.72358 9.23434 4.43902C9.23434 5.15447 8.98685 5.77236 8.49188 6.29268L7.93504 6.87805ZM9.79118 8.82927L8.81671 7.80488L12.1578 4.29268C12.3743 4.06504 12.4826 3.78049 12.4826 3.43902C12.4826 3.09756 12.3743 2.81301 12.1578 2.58537L10.6729 1.02439L11.6473 0L13.1323 1.56098C13.6272 2.0813 13.8747 2.70732 13.8747 3.43902C13.8747 4.17073 13.6272 4.79675 13.1323 5.31707L9.79118 8.82927ZM13.5035 12.7317L12.529 11.7073L14.0139 10.1463C14.5089 9.62602 15.1044 9.36585 15.8005 9.36585C16.4965 9.36585 17.092 9.62602 17.587 10.1463L19.0719 11.7073L18.0974 12.7317L16.6125 11.1707C16.396 10.9431 16.1253 10.8293 15.8005 10.8293C15.4756 10.8293 15.205 10.9431 14.9884 11.1707L13.5035 12.7317Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Для вечірок</p>
        </li>
      </ul>
    </div>
  );
};

export default Category;