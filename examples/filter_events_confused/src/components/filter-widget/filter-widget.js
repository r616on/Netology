/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */

export default class FilterWidget {
  constructor() {
    this.contactListEl = document.querySelector("[ data-section=contact-list]");
    this.contactTag = "li";
    this.filterWidgetEl = document.querySelector("[data-widget=filter-widget]");
    this.filterBtnEl = this.filterWidgetEl.querySelector(
      "[data-action=filter]"
    );
    this.filterTextEl = this.filterWidgetEl.querySelector(
      "[data-id=filter-text]"
    );
    this.data = [
      {
        id: 1,
        name: "Иванов Алексей",
        avatar: "https://placeimg.com/50/50/people",
        phone: "79600770000",
        details: "Подбробная информация о клиенте",
      },
      {
        id: 2,
        name: "Петров Александр",
        avatar: "https://placeimg.com/50/50/people",
        phone: "796007568",
        details: "Подбробная информация о клиенте",
      },
      {
        id: 3,
        name: "Зайцев Петр",
        avatar: "https://placeimg.com/50/50/people",
        phone: "796007700340",
        details: "Подбробная информация о клиенте",
      },
    ];
  }
  buildContactList(contacts, containerEl, elementTag) {
    containerEl.innerHTML = "";
    contacts.forEach((o) => {
      const el = document.createElement(elementTag);
      el.dataset.contact = "";
      el.dataset.contactId = o.id;
      el.innerHTML = `<div data-section="main">  
        <img src="${o.avatar}">     
         <span class="contact-name">${o.name}</span>
         <span class="contact-phone">${o.phone}</span>  
           <a href="tel:+${o.phone}" data-phone="${o.phone}" data-action="call">Звонок</a> 
         </div> 
         <div data-section="details" class="hidden">${o.details}</div>`;
      this.contactListEl.appendChild(el);
    });
  }
  filterBy(contacts, filterCallback) {
    return contacts.filter(filterCallback);
  }
  containsPhone(data, search) {
    const clean = search.replace(/[+ ()]/g, ""); // Удаляем +, ' ' и т.д.
    return data.startsWith(clean);
  }
  containsText(data, search) {
    const clean = search.trim().toLowerCase();
    return data.toLowerCase().includes(clean);
  }

  filterByNameOrPhone(contacts, text) {
    return this.filterBy(
      contacts,
      (o) =>
        this.containsPhone(o.phone, text) || this.containsText(o.name, text)
    );
  }
  init() {
    this.buildContactList(this.data, this.contactListEl, this.contactTag);

    this.filterBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      this.buildContactList(
        this.filterByNameOrPhone(this.data, this.filterTextEl.value),
        this.contactListEl,
        this.contactTag
      );
    });
    this.filterTextEl.addEventListener("input", () => {
      this.buildContactList(
        this.filterByNameOrPhone(this.data, this.filterTextEl.value),
        this.contactListEl,
        this.contactTag
      );
    });
  }
}

// filterBtnEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   buildContactList(
//     filterByNameOrPhone(data, filterTextEl.value),
//     contactListEl,
//     contactTag
//   );
// });
// filterTextEl.addEventListener("input", () => {
//   buildContactList(
//     filterByNameOrPhone(data, filterTextEl.value),
//     contactListEl,
//     contactTag
//   );
// });

// contactListEl.addEventListener("click", (event) => {
//   if (event.target.dataset.action === "call") {
//     event.preventDefault(); // TODO: make callreturn;
//   }
//   constcontactEl = event.target.closest("[data-contact]");
//   constcontactDetailsEl = contactEl.querySelector("[data-section=details]");
//   contactDetailsEl.classList.toggle("hidden");
// });
