import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as ImIcons from "react-icons/im"

export const SidebarData = [{
        title: "Dashboard",
        path: "/",
        icon: < AiIcons.AiFillHome / > ,
        // cName: "nav-text"
    },
    {
        title: "Data Member",
        path: "/member",
        icon: < FaIcons.FaAddressCard / > ,
        // cName: "nav-text"
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpened: < RiIcons.RiArrowUpSFill / > ,

        subNav: [{
                title: "Add Member",
                path: "/addMember",
                icon: < FaIcons.FaUserPlus / >
            },
            {
                title: "Edit Member",
                path: "/editMember",
                icon: < FaIcons.FaUserEdit / >
            }
        ]
    },
    {
        title: "Data User",
        path: "/user",
        icon: < FaIcons.FaChalkboardTeacher / > ,
        // cName: "nav-text"
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpened: < RiIcons.RiArrowUpSFill / > ,

        subNav: [{
                title: "Add User",
                path: "/addUser",
                icon: < ImIcons.ImUserPlus / >
            },
            {
                title: "Edit User",
                path: "/editUser",
                icon: < RiIcons.RiEditBoxFill / >
            }
        ]
    },
    {
        title: "Data Paket",
        path: "/paket",
        icon: < FaIcons.FaBox / > ,
        // cName: "nav-text"
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpened: < RiIcons.RiArrowUpSFill / > ,

        subNav: [{
                title: "Add Paket",
                path: "/addPaket",
                icon: < ImIcons.ImFolderPlus / >
            },
            {
                title: "Edit Paket",
                path: "/editPaket",
                icon: < RiIcons.RiFileEditFill / >
            }
        ]
    },
    {
        title: "Transaksi",
        path: "/transaksi",
        icon: < AiIcons.AiOutlineSolution / > ,
        // cName: "nav-text"
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpened: < RiIcons.RiArrowUpSFill / > ,

        subNav: [{
            title: "Add Transaksi",
            path: "/addTransaksi",
            icon: < AiIcons.AiFillFileAdd / >
        }, ]
    },
    // {
    //     title: "LogOut",
    //     path: "",
    //     icon: <AiIcons.AiOutlineLogout />,
    //     // cName: "nav-text"
    // },
]