import type { CustomFlowbiteTheme } from "flowbite-react";

const flowbiteTheme: CustomFlowbiteTheme = {
    table: {
        root: {
            base: "w-full text-left text-surface-grey divide-y divide-surface-grey-darker",
            shadow: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg drop-shadow-md bg-background-black",
            wrapper: "relative"
        },
        body: {
            base: "group/body text-surface-grey divide-y divide-surface-grey-darker",
            cell: {
                base: "px-6 py-4 whitespace-nowrap text-sm font-light 3rd:text-white 3rd:font-medium"
            }
        },
        head: {
            base: "group/head text-surface-grey font-semibold text-sm capitalize",
            cell: {
                base: "px-6 py-3 bg-background-black bg-gradient-to-b from-[rgba(52,52,52,0.4)] to-transparen"
            }

        },
        row: {
            base: "group/row bg-background-black",
            hovered: "hover:bg-surface-grey-darker"
        }
    },
    accordion: {
        root: {
            base: "divide-y divide-surface-grey",
            "flush": {
                "off": "rounded-lg border border-surface-grey",
                "on": "border-b border-surface-grey"
            },
        },
        title: {
            "flush": {
                "off": "hover:bg-section-grey-light focus:ring-1 focus:ring-gray-200"
            },
            open: {
                "on": "bg-section-grey-light"
            }
        }
    },
    card: {
        root: {
            "base": "flex rounded-lg border-none bg-section-grey shadow-md",
        }
    },
    popover: {
        base: "absolute z-20 inline-block w-max max-w-[100vw] bg-section-grey outline-none border border-surface-grey rounded-lg shadow-sm",
        arrow: {
            "base": "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-transparent border-none",
            "placement": "-4px"
        }
    },
    pagination: {
        pages: {
            next: {
                base: "rounded-r-lg border border-gray-300 bg-primary-700 px-3 py-2 leading-tight text-white enabled:hover:bg-primary-800",
            },
        },
    },
    avatar: {
        root: {
            initials: {
                text: "font-medium text-section-grey font-sans pt-[5%]",
                base: "relative inline-flex items-center justify-center overflow-hidden bg-surface-grey",
            },
            size: {
                xs: "h-6 w-6 text-md",
                sm: "h-8 w-8 text-xl",
                md: "h-10 w-10 text-2xl",
                lg: "h-20 w-20 text-5xl",
                xl: "h-32 w-32 text-[72px]"
            },
        },
    },
    badge: {
        root: {
            color: {
                primary:
                    "bg-primary-100 text-primary-800 dark:bg-primary-300 dark:text-primary-900 group-hover:bg-primary-300 dark:group-hover:bg-primary-300",
                success: "bg-success-green text-white",
                failure: "bg-failure-red text-white",
                red: "text-red-light",
                green: "text-main-light-green",
                blue: "text-jazz-blue",
                gray: "bg-badge-grey text-white",
                purple: "bg-badge-purple text-white"
            },
        },
    },
    spinner: {
        base: "inline animate-spin",
        color: {
            loading: "fill-white",
        },
    },
    select: {
        field: {
            select: {
                colors: {
                    primary: "placeholder-gray-400 border-none",
                    failure: "!focus:ring-red-500 placeholder-gray-400 border-none"
                },
                sizes: {
                    md: "py-4 px-7 [border-radius:16px] text-sm"
                }
            },
        }
    },
    textInput: {
        addon: "inline-flex items-center [border-bottom-left-radius:16px] [border-top-left-radius:16px] border border-0 bg-input-addon-grey px-3 text-sm text-power-grey",
        field: {
            icon: {
                svg: "h-4 w-4 text-white relative [top:-1px]"
            },
            input: {
                withAddon: {
                    "on": "![border-bottom-left-radius:0] ![border-top-left-radius:0]",
                    "off": "[border-radius:16px]"
                },
                base: "small-text w-full flex items-center focus:outline-none focus:ring-2 focus:ring-gray-600 w-full mx-auto border-none font-sans font-normal !leading-0",
                colors: {
                    primary: "focus:ring-dark-green placeholder-gray-400 text-black",
                    failure: "focus:ring-red-500 placeholder-gray-400 text-black"
                },
                sizes: {
                    md: "py-4 px-7 [border-radius:16px] text-normal"
                }
            },
        },
    },
    datepicker: {
        root: {
            base: "relative !text-black",
        },
        popup: {
            root: {
                "base": "absolute top-10 z-50 block pt-2",
                "inline": "relative top-0 z-auto",
                "inner": "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
            },
            "header": {
                "base": "",
                "title": "px-2 text-center font-semibold text-gray-900 dark:text-white",
                "selectors": {
                    "base": "mb-2 flex justify-between",
                    "button": {
                        "base": "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                        "prev": "",
                        "next": "",
                        "view": ""
                    }
                }
            },
            "footer": {
                "base": "mt-2 flex space-x-2",
                "button": {
                    "base": "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                    "today": "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
                    "clear": "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                }
            }
        },
        "views": {
            "days": {
                "header": {
                    "base": "mb-1 grid grid-cols-7",
                    "title": "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
                },
                "items": {
                    "base": "grid w-64 grid-cols-7",
                    "item": {
                        "base": "block py-0 flex-1 cursor-pointer rounded-lg border-0 text-center text-xs font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                        "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
                        "disabled": "text-gray-500"
                    }
                }
            },
            "months": {
                "items": {
                    "base": "grid w-64 grid-cols-4",
                    "item": {
                        "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                        "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
                        "disabled": "text-gray-500"
                    }
                }
            },
            "years": {
                "items": {
                    "base": "grid w-64 grid-cols-4",
                    "item": {
                        "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                        "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
                        "disabled": "text-gray-500"
                    }
                }
            },
            "decades": {
                "items": {
                    "base": "grid w-64 grid-cols-4",
                    "item": {
                        "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                        "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
                        "disabled": "text-gray-500"
                    }
                }
            }
        }
    },
    button: {
        color: {
            primary: "bg-gray-300 font-bold text-black font-mono hover:shadow-none duration-300 no-underline uppercase hover:bg-gray-700 hover:text-white hover:border-white",
            gray: "text-surface-grey bg-section-grey border border-none enabled:hover:bg-gradient-hover enabled:hover:text-white focus:text-white",
            red: "font-bold uppercase font-mono transition border border-red-600 bg-red-600 text-white focus:ring-red-700 enabled:hover:border-red-700 enabled:hover:bg-red-700",
        },
        size: {
            sm: "text-sm px-2 py-1 flex items-center gap-3",
            md: "text-sm px-6 py-3 flex items-center gap-3",
            square: "p-2",
            circle: "p-0",
        },
        pill: {
            off: "rounded-full",
        },
        outline: {
            color: {
                primary: "border border-[#585858] bg-toggle-background !shadow-none"
            },
            on: "bg-toggle-background transition-all duration-75 ease-in group-enabled:group-hover:shadow-green-shadow text-white group-enabled:group-hover:ring-0 group-enabled:group-hover:border-none",
            pill: {
                off: "rounded-[500px]"
            }
        },
    },
    dropdown: {
        floating: {
            base: "z-10 w-fit rounded-xl divide-y divide-gray-100 shadow",
            content: "rounded-xl text-sm text-gray-700",
            divider: "my-1 h-px bg-surface-grey-darker",
            target: "w-fit",
            style: {
                "auto": "border border-surface-grey-darker bg-section-grey text-black"
            },
            item: {
                "base": "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-black hover:bg-gradient-hover focus:bg-gradient-hover focus:outline-none",
            }
        },
        content: "",
    },
    label: {
        "root": {
            "base": "text-base font-medium block mb-2 whitespace-nowrap font-sans",
            "disabled": "opacity-50",
            "colors": {
                "default": "text-white",
            }
        }
    },
    radio: {
        root: {
            "base": "h-4 w-4 border border-grey-outline text-section-grey bg-section-grey focus:ring-1 focus:ring-main"
        }
    },
    modal: {
        content: {
            inner: "relative flex flex-col rounded-xl"
        },
        header: {
            "base": "flex items-start justify-between rounded-t p-5",
            "title": "text-xl font-medium text-white",
            "close": {
                "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:text-[#FFFF00] border-none"
            }
        },
        root: {
            base: "w-[100vw] h-[100vh]",
            show: {
                on: "flex bg-[rgba(0,0,0,0.4)] backdrop-blur-lg"
            }
        },
        footer: {
            popup: ""
        }
    },
    navbar: {
        root: {
            base: "fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",
        }
    },
    sidebar: {
        root: {
            base: "bg-gray-600 h-[100%] !min-w-[300px]",
            inner: "h-full overflow-y-auto overflow-x-hidden rounded px-3 py-4 w-full"
        },
        collapse: {
            button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-surface-grey transition duration-75 hover:text-white hover:bg-gradient-hover",
            icon: {
                "base": "h-6 w-6 text-surface-gray transition duration-75",
                "open": {
                    "off": "",
                    "on": "text-surface-grey"
                }
            },
            label: {
                "base": "ml-3 flex-1 whitespace-nowrap text-left pt-[4px]",
                "icon": {
                    "base": "h-6 w-6 transition delay-0 ease-in-out"
                }
            }
        },
        item: {
            base: "flex items-center justify-center rounded-lg p-2 mt-1 text-black text-xl font-normal hover:text-white hover:bg-gradient-to-l hover:from-[#FFFFFF50] hover:to-[#FFFFFF00]",
            icon: {
                base: "h-6 w-6 flex-shrink-0 text-surface-gray transition duration-75"
            },
            content: {
                base: "flex-1 whitespace-nowrap px-3 pt-[4px]"
            },
        }

    },
    textarea: {
        base: "block w-full py-4 px-7 [border-radius:16px] text-sm border disabled:cursor-not-allowed disabled:opacity-50",
        colors: {
            primary: "bg-jet-color focus:ring-dark-green placeholder-gray-400 text-black focus:border-dark-green border-none",
            failure: "border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500 bg-jet-color placeholder-gray-400",
        },
    },
    checkbox: {
        root: {
            base: "h-5 w-5 rounded border border-surface-grey text-white",
            color: {
                default:
                    "focus:ring-0 text-main bg-section-grey",
            },
        },
    },
    toggleSwitch: {
        root: {
        },
        toggle: {
            base: "relative rounded-full border after:absolute after:rounded-full after:bg-main after:transition-all group-focus:ring-1 !bg-toggle-background",
            checked: {
                on: "border !border-main after:translate-x-full after:border-main rtl:after:-translate-x-full after:bg-main group-focus:ring-main",
                off: "border border-industrial-revolution after:bg-industrial-revolution group-focus:ring-industrial-revolution"
            },
            sizes: {
                md: "h-6 w-11 min-w-11 after:left-px after:top-px after:h-5 after:w-5 rtl:after:right-px",
            }
        }
    },
};

export default flowbiteTheme;
