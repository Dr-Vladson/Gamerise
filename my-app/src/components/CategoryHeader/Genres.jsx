import styles from "./Genres.module.css";
// const genres = [
//   { id: 0, name: "Стратегії" },
//   { id: 1, name: "Пригоди" },
//   { id: 2, name: "Кооперативні" },
//   { id: 3, name: "Логічні" },
//   { id: 4, name: "Вікторина" },
//   { id: 5, name: "Творчі" },
//   { id: 6, name: "Класичні" },
//   { id: 5, name: "Квести" },
//   { id: 5, name: "Рольові" },
//   { id: 5, name: "Карткові" },
// ];

const Genres = () => {
  return (
    <div>
      <ul className={styles.genresList}>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18H16V16H2V18ZM5.3 14H12.7L12.125 10H5.875L5.3 14ZM0 20V16C0 15.45 0.195833 14.9792 0.5875 14.5875C0.979167 14.1958 1.45 14 2 14H3.3L3.85 10H1V8H17V10H14.15L14.7 14H16C16.55 14 17.0208 14.1958 17.4125 14.5875C17.8042 14.9792 18 15.45 18 16V20H0ZM3.775 8L2 0C2.55 0.416667 3.11667 0.808333 3.7 1.175C4.28333 1.54167 4.925 1.725 5.625 1.725C6.29167 1.725 6.90417 1.55417 7.4625 1.2125C8.02083 0.870833 8.53333 0.466667 9 0C9.46667 0.466667 9.97917 0.870833 10.5375 1.2125C11.0958 1.55417 11.7083 1.725 12.375 1.725C13.075 1.725 13.7167 1.54167 14.3 1.175C14.8833 0.808333 15.45 0.416667 16 0L14.225 8H12.175L13.15 3.675L12.9625 3.7C12.8375 3.71667 12.6417 3.725 12.375 3.725C11.775 3.725 11.1875 3.63333 10.6125 3.45C10.0375 3.26667 9.5 3.00833 9 2.675C8.51667 3.00833 7.99583 3.26667 7.4375 3.45C6.87917 3.63333 6.30833 3.725 5.725 3.725C5.425 3.725 5.20417 3.71667 5.0625 3.7L4.85 3.675L5.825 8H3.775Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Стратегії</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C12.2833 13 12.5292 12.8958 12.7375 12.6875C12.9458 12.4792 13.05 12.2333 13.05 11.95C13.05 11.6667 12.9458 11.4208 12.7375 11.2125C12.5292 11.0042 12.2833 10.9 12 10.9C11.7167 10.9 11.4708 11.0042 11.2625 11.2125C11.0542 11.4208 10.95 11.6667 10.95 11.95C10.95 12.2333 11.0542 12.4792 11.2625 12.6875C11.4708 12.8958 11.7167 13 12 13ZM11.25 9.8H12.75C12.75 9.31667 12.8 8.9625 12.9 8.7375C13 8.5125 13.2333 8.21667 13.6 7.85C14.1 7.35 14.4333 6.94583 14.6 6.6375C14.7667 6.32917 14.85 5.96667 14.85 5.55C14.85 4.8 14.5875 4.1875 14.0625 3.7125C13.5375 3.2375 12.85 3 12 3C11.3167 3 10.7208 3.19167 10.2125 3.575C9.70417 3.95833 9.35 4.46667 9.15 5.1L10.5 5.65C10.65 5.23333 10.8542 4.92083 11.1125 4.7125C11.3708 4.50417 11.6667 4.4 12 4.4C12.4 4.4 12.725 4.5125 12.975 4.7375C13.225 4.9625 13.35 5.26667 13.35 5.65C13.35 5.88333 13.2833 6.10417 13.15 6.3125C13.0167 6.52083 12.7833 6.78333 12.45 7.1C11.9 7.58333 11.5625 7.9625 11.4375 8.2375C11.3125 8.5125 11.25 9.03333 11.25 9.8ZM6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H6ZM6 14H18V2H6V14ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4H2V18H16V20H2Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Вікторина</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.8 12C5.95 12 5.1375 11.85 4.3625 11.55C3.5875 11.25 2.89167 10.8083 2.275 10.225C1.475 9.475 0.895833 8.5875 0.5375 7.5625C0.179167 6.5375 0 5.475 0 4.375C0 3.075 0.316667 2.02083 0.95 1.2125C1.58333 0.404167 2.50833 0 3.725 0C3.95833 0 4.17917 0.0208333 4.3875 0.0625C4.59583 0.104167 4.80833 0.166667 5.025 0.25L11 2.475L16.975 0.25C17.1917 0.166667 17.4042 0.104167 17.6125 0.0625C17.8208 0.0208333 18.0417 0 18.275 0C19.4917 0 20.4167 0.404167 21.05 1.2125C21.6833 2.02083 22 3.075 22 4.375C22 5.475 21.8208 6.5375 21.4625 7.5625C21.1042 8.5875 20.525 9.475 19.725 10.225C19.1083 10.8083 18.4125 11.25 17.6375 11.55C16.8625 11.85 16.05 12 15.2 12C14.1 12 13.1667 11.75 12.4 11.25L11.25 10.5H10.75L9.6 11.25C8.83333 11.75 7.9 12 6.8 12ZM6.8 10C7.41667 10 7.99167 9.85417 8.525 9.5625C9.05833 9.27083 9.55 8.91667 10 8.5H12C12.45 8.91667 12.9417 9.27083 13.475 9.5625C14.0083 9.85417 14.5833 10 15.2 10C15.8 10 16.3792 9.89583 16.9375 9.6875C17.4958 9.47917 17.9917 9.15833 18.425 8.725C18.9917 8.15833 19.3958 7.49167 19.6375 6.725C19.8792 5.95833 20 5.175 20 4.375C20 3.69167 19.8583 3.12083 19.575 2.6625C19.2917 2.20417 18.8417 1.98333 18.225 2C18.175 2 17.9917 2.03333 17.675 2.1L11 4.6L4.325 2.1C4.24167 2.06667 4.15417 2.04167 4.0625 2.025C3.97083 2.00833 3.875 2 3.775 2C3.15833 2 2.70833 2.225 2.425 2.675C2.14167 3.125 2 3.69167 2 4.375C2 5.19167 2.12083 5.98333 2.3625 6.75C2.60417 7.51667 3.01667 8.18333 3.6 8.75C4.03333 9.16667 4.525 9.47917 5.075 9.6875C5.625 9.89583 6.2 10 6.8 10ZM8.025 8.5C8.64167 8.5 9.125 8.3625 9.475 8.0875C9.825 7.8125 10 7.43333 10 6.95C10 6.13333 9.4625 5.35417 8.3875 4.6125C7.3125 3.87083 6.175 3.5 4.975 3.5C4.35833 3.5 3.875 3.6375 3.525 3.9125C3.175 4.1875 3 4.56667 3 5.05C3 5.86667 3.5375 6.64583 4.6125 7.3875C5.6875 8.12917 6.825 8.5 8.025 8.5ZM7.875 7C7.24167 7 6.55417 6.79167 5.8125 6.375C5.07083 5.95833 4.63333 5.53333 4.5 5.1C4.58333 5.06667 4.67917 5.0375 4.7875 5.0125C4.89583 4.9875 5.00833 4.975 5.125 4.975C5.75833 4.975 6.44583 5.1875 7.1875 5.6125C7.92917 6.0375 8.36667 6.46667 8.5 6.9C8.41667 6.93333 8.32083 6.95833 8.2125 6.975C8.10417 6.99167 7.99167 7 7.875 7ZM13.975 8.525C15.175 8.525 16.3125 8.15 17.3875 7.4C18.4625 6.65 19 5.86667 19 5.05C19 4.56667 18.8292 4.18333 18.4875 3.9C18.1458 3.61667 17.6583 3.475 17.025 3.475C15.825 3.475 14.6875 3.85 13.6125 4.6C12.5375 5.35 12 6.13333 12 6.95C12 7.43333 12.175 7.81667 12.525 8.1C12.875 8.38333 13.3583 8.525 13.975 8.525ZM14.125 7C14.0083 7 13.9 6.99167 13.8 6.975C13.7 6.95833 13.6083 6.93333 13.525 6.9C13.6583 6.46667 14.0958 6.04167 14.8375 5.625C15.5792 5.20833 16.2667 5 16.9 5C17.0167 5 17.125 5.00833 17.225 5.025C17.325 5.04167 17.4167 5.06667 17.5 5.1C17.3667 5.53333 16.9292 5.95833 16.1875 6.375C15.4458 6.79167 14.7583 7 14.125 7Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Рольові</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20V15.35L8.75 3.55L7 1.2L8.6 0L10 1.875L11.4 0L13 1.2L11.25 3.55L20 15.35V20H0ZM10 5.225L2 16V18H5L10 11L15 18H18V16L10 5.225ZM7.45 18H12.55L10 14.45L7.45 18Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Пригоди</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.270833 7.31667 0.8125 6.1C1.35417 4.88333 2.0875 3.825 3.0125 2.925C3.9375 2.025 5.01667 1.3125 6.25 0.7875C7.48333 0.2625 8.8 0 10.2 0C11.5333 0 12.7917 0.229167 13.975 0.6875C15.1583 1.14583 16.1958 1.77917 17.0875 2.5875C17.9792 3.39583 18.6875 4.35417 19.2125 5.4625C19.7375 6.57083 20 7.76667 20 9.05C20 10.9667 19.4167 12.4375 18.25 13.4625C17.0833 14.4875 15.6667 15 14 15H12.15C12 15 11.8958 15.0417 11.8375 15.125C11.7792 15.2083 11.75 15.3 11.75 15.4C11.75 15.6 11.875 15.8875 12.125 16.2625C12.375 16.6375 12.5 17.0667 12.5 17.55C12.5 18.3833 12.2708 19 11.8125 19.4C11.3542 19.8 10.75 20 10 20ZM4.5 11C4.93333 11 5.29167 10.8583 5.575 10.575C5.85833 10.2917 6 9.93333 6 9.5C6 9.06667 5.85833 8.70833 5.575 8.425C5.29167 8.14167 4.93333 8 4.5 8C4.06667 8 3.70833 8.14167 3.425 8.425C3.14167 8.70833 3 9.06667 3 9.5C3 9.93333 3.14167 10.2917 3.425 10.575C3.70833 10.8583 4.06667 11 4.5 11ZM7.5 7C7.93333 7 8.29167 6.85833 8.575 6.575C8.85833 6.29167 9 5.93333 9 5.5C9 5.06667 8.85833 4.70833 8.575 4.425C8.29167 4.14167 7.93333 4 7.5 4C7.06667 4 6.70833 4.14167 6.425 4.425C6.14167 4.70833 6 5.06667 6 5.5C6 5.93333 6.14167 6.29167 6.425 6.575C6.70833 6.85833 7.06667 7 7.5 7ZM12.5 7C12.9333 7 13.2917 6.85833 13.575 6.575C13.8583 6.29167 14 5.93333 14 5.5C14 5.06667 13.8583 4.70833 13.575 4.425C13.2917 4.14167 12.9333 4 12.5 4C12.0667 4 11.7083 4.14167 11.425 4.425C11.1417 4.70833 11 5.06667 11 5.5C11 5.93333 11.1417 6.29167 11.425 6.575C11.7083 6.85833 12.0667 7 12.5 7ZM15.5 11C15.9333 11 16.2917 10.8583 16.575 10.575C16.8583 10.2917 17 9.93333 17 9.5C17 9.06667 16.8583 8.70833 16.575 8.425C16.2917 8.14167 15.9333 8 15.5 8C15.0667 8 14.7083 8.14167 14.425 8.425C14.1417 8.70833 14 9.06667 14 9.5C14 9.93333 14.1417 10.2917 14.425 10.575C14.7083 10.8583 15.0667 11 15.5 11ZM10 18C10.15 18 10.2708 17.9583 10.3625 17.875C10.4542 17.7917 10.5 17.6833 10.5 17.55C10.5 17.3167 10.375 17.0417 10.125 16.725C9.875 16.4083 9.75 15.9333 9.75 15.3C9.75 14.6 9.99167 14.0417 10.475 13.625C10.9583 13.2083 11.55 13 12.25 13H14C15.1 13 16.0417 12.6792 16.825 12.0375C17.6083 11.3958 18 10.4 18 9.05C18 7.03333 17.2292 5.35417 15.6875 4.0125C14.1458 2.67083 12.3167 2 10.2 2C7.93333 2 6 2.775 4.4 4.325C2.8 5.875 2 7.76667 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Творчі</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.99616 17.6573L1.14779 17.2902C0.632118 17.0629 0.286948 16.6696 0.112284 16.1101C-0.06238 15.5507 -0.0332693 15 0.199616 14.458L1.99616 10.3671V17.6573ZM5.98848 19.965C5.43954 19.965 4.96961 19.7596 4.57869 19.3488C4.18778 18.9379 3.99232 18.4441 3.99232 17.8671V11.5734L6.63724 19.2832C6.68714 19.4056 6.73704 19.5236 6.78695 19.6372C6.83685 19.7509 6.90339 19.8601 6.98656 19.965H5.98848ZM11.1286 19.8601C10.5963 20.0699 10.0806 20.0437 9.58157 19.7815C9.08253 19.5192 8.73321 19.1084 8.53359 18.549L4.09213 5.75175C3.89251 5.19231 3.90915 4.64598 4.14203 4.11276C4.37492 3.57955 4.75752 3.21678 5.28983 3.02448L12.8253 0.13986C13.3576 -0.0699301 13.8733 -0.0437063 14.3724 0.218531C14.8714 0.480769 15.2207 0.891608 15.4203 1.45105L19.8618 14.2483C20.0614 14.8077 20.0448 15.354 19.8119 15.8872C19.579 16.4205 19.1964 16.7832 18.6641 16.9755L11.1286 19.8601ZM8.98273 7.37762C9.26551 7.37762 9.50256 7.2771 9.69386 7.07605C9.88516 6.875 9.98081 6.62587 9.98081 6.32867C9.98081 6.03147 9.88516 5.78234 9.69386 5.58129C9.50256 5.38024 9.26551 5.27972 8.98273 5.27972C8.69994 5.27972 8.46289 5.38024 8.27159 5.58129C8.08029 5.78234 7.98464 6.03147 7.98464 6.32867C7.98464 6.62587 8.08029 6.875 8.27159 7.07605C8.46289 7.2771 8.69994 7.37762 8.98273 7.37762ZM10.4299 17.8671L17.9655 14.9825L13.524 2.13287L5.98848 5.01748L10.4299 17.8671Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Карткові</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8801 18C10.9467 18 11.0133 17.9833 11.08 17.95C11.1466 17.9167 11.1966 17.8833 11.2299 17.85L19.4262 9.65C19.6261 9.45 19.7718 9.225 19.8635 8.975C19.9551 8.725 20.0009 8.475 20.0009 8.225C20.0009 7.95833 19.9551 7.70417 19.8635 7.4625C19.7718 7.22083 19.6261 7.00833 19.4262 6.825L15.1781 2.575C14.9949 2.375 14.7824 2.22917 14.5409 2.1375C14.2993 2.04583 14.0453 2 13.7787 2C13.5289 2 13.279 2.04583 13.0291 2.1375C12.7792 2.22917 12.5543 2.375 12.3544 2.575L12.0795 2.85L13.9287 4.725C14.1786 4.95833 14.3618 5.225 14.4784 5.525C14.595 5.825 14.6533 6.14167 14.6533 6.475C14.6533 7.175 14.4159 7.7625 13.9412 8.2375C13.4664 8.7125 12.8791 8.95 12.1795 8.95C11.8463 8.95 11.5256 8.89167 11.2174 8.775C10.9092 8.65833 10.6385 8.48333 10.4053 8.25L8.53112 6.4L4.15811 10.775C4.10813 10.825 4.07065 10.8792 4.04566 10.9375C4.02067 10.9958 4.00818 11.0583 4.00818 11.125C4.00818 11.2583 4.05816 11.3792 4.15811 11.4875C4.25806 11.5958 4.37468 11.65 4.50795 11.65C4.57459 11.65 4.64122 11.6333 4.70786 11.6C4.7745 11.5667 4.82447 11.5333 4.85779 11.5L8.25625 8.1L9.65561 9.5L6.28214 12.9C6.23217 12.95 6.19468 13.0042 6.16969 13.0625C6.14471 13.1208 6.13221 13.1833 6.13221 13.25C6.13221 13.3833 6.18219 13.5 6.28214 13.6C6.3821 13.7 6.49871 13.75 6.63198 13.75C6.69862 13.75 6.76526 13.7333 6.83189 13.7C6.89853 13.6667 6.94851 13.6333 6.98183 13.6L10.3803 10.225L11.7796 11.625L8.40618 15.025C8.3562 15.0583 8.31872 15.1083 8.29373 15.175C8.26874 15.2417 8.25625 15.3083 8.25625 15.375C8.25625 15.5083 8.30622 15.625 8.40618 15.725C8.50613 15.825 8.62275 15.875 8.75602 15.875C8.82266 15.875 8.88513 15.8625 8.94343 15.8375C9.00174 15.8125 9.05588 15.775 9.10586 15.725L12.5043 12.35L13.9037 13.75L10.5052 17.15C10.4552 17.2 10.4178 17.2542 10.3928 17.3125C10.3678 17.3708 10.3553 17.4333 10.3553 17.5C10.3553 17.6333 10.4094 17.75 10.5177 17.85C10.626 17.95 10.7468 18 10.8801 18ZM10.8551 20C10.2387 20 9.69309 19.7958 9.21831 19.3875C8.74352 18.9792 8.46449 18.4667 8.38119 17.85C7.81478 17.7667 7.34 17.5333 6.95684 17.15C6.57368 16.7667 6.34045 16.2917 6.25716 15.725C5.69075 15.6417 5.22013 15.4042 4.8453 15.0125C4.47047 14.6208 4.24141 14.15 4.15811 13.6C3.52506 13.5167 3.00863 13.2417 2.60881 12.775C2.209 12.3083 2.00909 11.7583 2.00909 11.125C2.00909 10.7917 2.07156 10.4708 2.1965 10.1625C2.32144 9.85417 2.50053 9.58333 2.73376 9.35L8.53112 3.575L11.8046 6.85C11.838 6.9 11.8879 6.9375 11.9546 6.9625C12.0212 6.9875 12.0878 7 12.1545 7C12.3044 7 12.4293 6.95417 12.5293 6.8625C12.6293 6.77083 12.6792 6.65 12.6792 6.5C12.6792 6.43333 12.6667 6.36667 12.6418 6.3C12.6168 6.23333 12.5793 6.18333 12.5293 6.15L8.95593 2.575C8.77268 2.375 8.56028 2.22917 8.31872 2.1375C8.07716 2.04583 7.82311 2 7.55656 2C7.30668 2 7.05679 2.04583 6.80691 2.1375C6.55702 2.22917 6.33212 2.375 6.13221 2.575L2.60881 6.125C2.45888 6.275 2.33394 6.45 2.23398 6.65C2.13403 6.85 2.06739 7.05 2.03408 7.25C2.00076 7.45 2.00076 7.65417 2.03408 7.8625C2.06739 8.07083 2.13403 8.26667 2.23398 8.45L0.784643 9.9C0.501439 9.51667 0.2932 9.09583 0.159927 8.6375C0.0266545 8.17917 -0.0233227 7.71667 0.00999546 7.25C0.0433136 6.78333 0.159927 6.32917 0.359836 5.8875C0.559746 5.44583 0.834621 5.05 1.18446 4.7L4.70786 1.175C5.10768 0.791667 5.55331 0.5 6.04475 0.3C6.5362 0.1 7.04013 0 7.55656 0C8.073 0 8.57693 0.1 9.06838 0.3C9.55982 0.5 9.99712 0.791667 10.3803 1.175L10.6552 1.45L10.93 1.175C11.3298 0.791667 11.7755 0.5 12.2669 0.3C12.7584 0.1 13.2623 0 13.7787 0C14.2952 0 14.7991 0.1 15.2905 0.3C15.782 0.5 16.2193 0.791667 16.6025 1.175L20.8255 5.4C21.2087 5.78333 21.5002 6.225 21.7001 6.725C21.9 7.225 22 7.73333 22 8.25C22 8.76667 21.9 9.27083 21.7001 9.7625C21.5002 10.2542 21.2087 10.6917 20.8255 11.075L12.6293 19.25C12.396 19.4833 12.1253 19.6667 11.8171 19.8C11.5089 19.9333 11.1882 20 10.8551 20Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Кооперативні</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 18H12V14H8V18ZM2 12H6V8H2V12ZM8 12H12V8H8V12ZM14 12H18V8H14V12ZM14 6H18V2H14V6ZM6 20V14H0V6H12V0H20V14H14V20H6Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Класичні</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16C10.9333 16 12.5833 15.3208 13.95 13.9625C15.3167 12.6042 16 10.95 16 9C16 7.06667 15.3167 5.41667 13.95 4.05C12.5833 2.68333 10.9333 2 9 2C7.05 2 5.39583 2.68333 4.0375 4.05C2.67917 5.41667 2 7.06667 2 9C2 10.95 2.67917 12.6042 4.0375 13.9625C5.39583 15.3208 7.05 16 9 16ZM9 13C7.61667 13 6.3875 12.6292 5.3125 11.8875C4.2375 11.1458 3.46667 10.1833 3 9C3.46667 7.83333 4.2375 6.875 5.3125 6.125C6.3875 5.375 7.61667 5 9 5C10.3667 5 11.5875 5.375 12.6625 6.125C13.7375 6.875 14.5167 7.83333 15 9C14.5167 10.1833 13.7375 11.1458 12.6625 11.8875C11.5875 12.6292 10.3667 13 9 13ZM9 11.5C9.91667 11.5 10.7583 11.2792 11.525 10.8375C12.2917 10.3958 12.8917 9.78333 13.325 9C12.8917 8.23333 12.2917 7.625 11.525 7.175C10.7583 6.725 9.91667 6.5 9 6.5C8.06667 6.5 7.21667 6.725 6.45 7.175C5.68333 7.625 5.08333 8.23333 4.65 9C5.08333 9.78333 5.68333 10.3958 6.45 10.8375C7.21667 11.2792 8.06667 11.5 9 11.5ZM9 10.5C9.41667 10.5 9.77083 10.3583 10.0625 10.075C10.3542 9.79167 10.5 9.43333 10.5 9C10.5 8.58333 10.3542 8.22917 10.0625 7.9375C9.77083 7.64583 9.41667 7.5 9 7.5C8.56667 7.5 8.20833 7.64583 7.925 7.9375C7.64167 8.22917 7.5 8.58333 7.5 9C7.5 9.43333 7.64167 9.79167 7.925 10.075C8.20833 10.3583 8.56667 10.5 9 10.5ZM9 18C7.75 18 6.57917 17.7625 5.4875 17.2875C4.39583 16.8125 3.44583 16.1708 2.6375 15.3625C1.82917 14.5542 1.1875 13.6042 0.7125 12.5125C0.2375 11.4208 0 10.25 0 9C0 7.76667 0.2375 6.60417 0.7125 5.5125C1.1875 4.42083 1.82917 3.46667 2.6375 2.65C3.44583 1.83333 4.39583 1.1875 5.4875 0.7125C6.57917 0.2375 7.75 0 9 0C10.2333 0 11.3958 0.2375 12.4875 0.7125C13.5792 1.1875 14.5333 1.83333 15.35 2.65C16.1667 3.46667 16.8125 4.42083 17.2875 5.5125C17.7625 6.60417 18 7.76667 18 9C18 10.0667 17.825 11.075 17.475 12.025C17.125 12.975 16.6417 13.8417 16.025 14.625L20 18.6L18.575 20L14.6 16.05C13.8167 16.6667 12.95 17.1458 12 17.4875C11.05 17.8292 10.05 18 9 18Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Квести</p>
        </li>
        <li className={styles.genresListItem}>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.94872 20H2.05128C1.48718 20 1.00427 19.7991 0.602564 19.3974C0.200855 18.9957 0 18.5128 0 17.9487V14.0513C0.820513 14.0513 1.53846 13.7906 2.15385 13.2692C2.76923 12.7479 3.07692 12.0855 3.07692 11.2821C3.07692 10.4786 2.76923 9.81624 2.15385 9.29487C1.53846 8.7735 0.820513 8.51282 0 8.51282V4.61538C0 4.05128 0.200855 3.56838 0.602564 3.16667C1.00427 2.76496 1.48718 2.5641 2.05128 2.5641H6.15385C6.15385 1.84615 6.40171 1.23932 6.89744 0.74359C7.39316 0.247863 8 0 8.71795 0C9.4359 0 10.0427 0.247863 10.5385 0.74359C11.0342 1.23932 11.2821 1.84615 11.2821 2.5641H15.3846C15.9487 2.5641 16.4316 2.76496 16.8333 3.16667C17.235 3.56838 17.4359 4.05128 17.4359 4.61538V8.71795C18.1538 8.71795 18.7607 8.96581 19.2564 9.46154C19.7521 9.95726 20 10.5641 20 11.2821C20 12 19.7521 12.6068 19.2564 13.1026C18.7607 13.5983 18.1538 13.8462 17.4359 13.8462V17.9487C17.4359 18.5128 17.235 18.9957 16.8333 19.3974C16.4316 19.7991 15.9487 20 15.3846 20H11.4872C11.4872 19.1453 11.2179 18.4188 10.6795 17.8205C10.141 17.2222 9.48718 16.9231 8.71795 16.9231C7.94872 16.9231 7.29487 17.2222 6.75641 17.8205C6.21795 18.4188 5.94872 19.1453 5.94872 20ZM2.05128 17.9487H4.23077C4.64103 16.8205 5.29915 16.0256 6.20513 15.5641C7.11111 15.1026 7.94872 14.8718 8.71795 14.8718C9.48718 14.8718 10.3248 15.1026 11.2308 15.5641C12.1368 16.0256 12.7949 16.8205 13.2051 17.9487H15.3846V11.7949H17.4359C17.5726 11.7949 17.6923 11.7436 17.7949 11.641C17.8974 11.5385 17.9487 11.4188 17.9487 11.2821C17.9487 11.1453 17.8974 11.0256 17.7949 10.9231C17.6923 10.8205 17.5726 10.7692 17.4359 10.7692H15.3846V4.61538H9.23077V2.5641C9.23077 2.42735 9.17949 2.30769 9.07692 2.20513C8.97436 2.10256 8.8547 2.05128 8.71795 2.05128C8.5812 2.05128 8.46154 2.10256 8.35897 2.20513C8.25641 2.30769 8.20513 2.42735 8.20513 2.5641V4.61538H2.05128V6.8718C2.97436 7.21368 3.71795 7.78632 4.28205 8.58974C4.84615 9.39316 5.12821 10.2906 5.12821 11.2821C5.12821 12.2564 4.84615 13.1453 4.28205 13.9487C3.71795 14.7521 2.97436 15.3333 2.05128 15.6923V17.9487Z"
                fill="#AAC4FF"
              />
            </svg>
          </div>
          <p>Логічні</p>
        </li>
      </ul>
    </div>
  );
};

export default Genres;