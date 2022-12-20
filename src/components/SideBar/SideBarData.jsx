import React from "react";

import icon2 from 'assets/img/NavBar/Vector.svg'
import icon3 from 'assets/img/NavBar/VectorDown.svg'

import styles from './style.module.css'

export const SideBarData = [
    {
        title: 'Бадминтон',
        path: '/catalog/badminton',
        icon: icon2,
        cName: styles.navItem ,
        id:'1',
        subcategory:[
            {
                title: 'Мужская одежда',
                path: "/catalog/badminton/men's_clothing",
                icon: icon3,
                cName: styles.childItem ,
                subcategory:[
                    {
                        title: 'Футболки',
                        path: "/catalog/badminton/men's_clothing/T-shirts",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Спортивные костюмы',
                        path: "/catalog/badminton/men's_clothing/tracksuits",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Шорты',
                        path: "/catalog/badminton/men's_clothing/shorts",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Верхняя одежда',
                        path: "/catalog/badminton/men's_clothing/outerwear",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Носки',
                        path: "/catalog/badminton/men's_clothing/socks",
                        cName: styles.subChildItem,
                    }
                ]
            },
            {
                title: 'Женская одежда',
                path: "/catalog/badminton/women's_clothing",
                icon: icon3,
                cName: styles.childItem ,
                subcategory:[
                    {
                        title: 'Футболки',
                        path: "/catalog/badminton/women's_clothing/T-shirts",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Спортивные костюмы',
                        path: "/catalog/badminton/women's_clothing/tracksuits",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Юбки, Шорты',
                        path: "/catalog/badminton/women's_clothing/skirts_shorts",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Верхняя одежда',
                        path: "/catalog/badminton/women's_clothing/outerwear",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Носки',
                        path: "/catalog/badminton/women's_clothing/socks",
                        cName: styles.subChildItem,
                    }
                ]
            },
            {
                title: 'Кроссовки',
                path: "/catalog/badminton/shoes",
                cName: styles.childItem
            },
            {
                title: 'Ракетки',
                path: "/catalog/badminton/rackets",
                cName: styles.childItem
            },
            {
                title: 'Воланы',
                path: "/catalog/badminton/shuttlecocks",
                cName: styles.childItem
            },
            {
                title: 'Станки для натяжки',
                path: "/catalog/badminton/stretching_machines",
                cName: styles.childItem
            },
            {
                title: 'Струны',
                path: "/catalog/badminton/strings",
                cName: styles.childItem
            },
            {
                title: 'Сетки',
                path: "/catalog/badminton/grids",
                cName: styles.childItem
            },
            {
                title: 'Пушки для бадминтона',
                path: "/catalog/badminton/badminton_guns",
                cName: styles.childItem
            },
            {
                title: 'Обмотки',
                path: "/catalog/badminton/windings",
                cName: styles.childItem
            },
            {
                title: 'Карты',
                path: "/catalog/badminton/cards",
                cName: styles.childItem
            },
            {
                title: 'Сумки',
                path: "/catalog/badminton/bags",
                cName: styles.childItem
            },
            {
                title: 'Аксессуары',
                path: "/catalog/badminton/accessories",
                icon: icon3,
                cName: styles.childItem ,
                subcategory:[
                    {
                        title: 'Бамперы',
                        path: "/catalog/badminton/accessories/bumpers",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Напульсники',
                        path: "/catalog/badminton/accessories/wristlets",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Полотенца',
                        path: "/catalog/badminton/accessories/towels",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Бутылки и фляги',
                        path: "/catalog/badminton/accessories/bottlles_flasks",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Отпариватели',
                        path: "/catalog/badminton/accessories/steamers",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Стельки',
                        path: "/catalog/badminton/accessories/insoles",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Инструменты',
                        path: "/catalog/badminton/accessories/tools",
                        cName: styles.subChildItem,
                    },
                    {
                        title: 'Повязки на голову',
                        path: "/catalog/badminton/accessories/headbands",
                        cName: styles.subChildItem,
                    }
                ]
            }
        ]
    },
    {
        title: 'Теннис',
        path: '/catalog/tennis',
        icon: icon2,
        cName: styles.navItem ,
        id:'2'
    },
    {
        title: 'Фитнес',
        path: '/catalog/fitness',
        icon: icon2,
        cName: styles.navItem ,
        id:'3'
    },
    {
        title: 'Плавание',
        path: '/catalog/swimming',
        icon: icon2,
        cName: styles.navItem ,
        id:'4'
    },
    {
        title: 'Скандинавская ходьба',
        path: '/catalog/nordic_walking',
        icon: icon2,
        cName: styles.navItem ,
        id:'5',
        
    },
    {
        title: 'Медицина',
        path: '/catalog/medicine',
        icon: icon2,
        cName: styles.navItem ,
        id:'6',
        subcategory:[
            {
                title: 'Ортезы',
                path: "/catalog/medicine/orthoses",
                cName: styles.childItem
            },
            {
                title: 'Спортивная медицина',
                path: "/catalog/medicine/sports_medicine",
                cName: styles.childItem
            },
            {
                title: 'Спортивные коляски',
                path: "/catalog/medicine/sports_stollers",
                cName: styles.childItem
            }
        ]
    },
    {
        title: 'Подарочные карты',
        path: '/catalog/gift_card',
        icon: icon2,
        cName: styles.navItem ,
        id:'7'
    }
];
