import 'normalize.css'
import './index.scss'
import '@fortawesome/fontawesome-free/js/all.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getParent(element, selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement
        }
        element = element.parentElement
    }
}

function getIndexElement(elements, element) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] === element) return i
    }
}

function styleInline(element, object) {
    Object.keys(object).forEach((item) => {
        element.style[item] = object[item]
    })
}

const data = [
    {
        label: 'Product',
        status: 'done',
        type: 'html'
    },
    {
        label: 'Features',
        status: 'done',
        type: 'html'
    },
    {
        label: 'Security',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Team',
        status: 'done',
        type: 'css'
    },
    {
        label: 'Enterprise',
        status: 'processing',
        type: 'css'
    },
    {
        label: 'Customer stories',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'The ReadME Project',
        status: 'done',
        type: 'html'
    },
    {
        label: 'Pricing',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'Resources',
        status: 'processing',
        type: 'javascript'
    },
    {
        label: 'Roadmap',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Letter Spacing',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Line Height',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'List Style Type',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'List Style Position',
        status: 'new',
        type: 'css'
    },
    {
        label: 'Text Align',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Text Color',
        status: 'processing',
        type: 'css'
    },
    {
        label: 'Text Decoration',
        status: 'new',
        type: 'html'
    },
    {
        label: 'Text Decoration Color',
        status: 'processing',
        type: 'html'
    },
    {
        label: 'Text Decoration Style',
        status: 'done',
        type: 'css'
    },
    {
        label: 'Text Decoration',
        status: 'done',
        type: 'javascript'
    },
    {
        label: 'Text Underline',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'Text Transform',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'Text Overflow',
        status: 'done',
        type: 'css'
    },
    {
        label: 'Text Indent',
        status: 'done',
        type: 'javascript'
    },
    {
        label: 'Vertical Align',
        status: 'done',
        type: 'css'
    },
    {
        label: 'Whitespace',
        status: 'new',
        type: 'css'
    },
    {
        label: 'Word Break',
        status: 'new',
        type: 'javascript'
    },
    {
        label: 'Content',
        status: 'new',
        type: 'javascript'
    }
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const container = $('.container')

let active_index = 0

const appendNode = (parent, tag_name, content, class_name = '') => {
    const newNode = document.createElement(tag_name)
    newNode.innerHTML = content
    if (class_name) newNode.className = class_name
    parent.append(newNode)
}
appendNode(
    container,
    'div',
    `
        <button class='btn category'>
        Group by category
        </button>
        <button class='btn randomly'>
        Group Randomly
        </button>
    `,
    'group_button text-center'
)

const buttons = $('.group_button').getElementsByClassName('btn')
buttons[active_index].classList.add('btn--active')

const changeActiveButton = () => {
    Array.from(buttons).forEach((button, idx) => {
        button.addEventListener('click', function (e) {
            buttons[active_index].classList.remove('btn--active')
            active_index = idx
            e.target.classList.add('btn--active')
            group_randomly(active_index)
        })
    })
}
changeActiveButton()

appendNode(container, 'div', '', 'grid_node grid grid-cols-3 gap-4')

const grid_node = $('.grid_node')

appendNode(grid_node, 'div', '', 'html items_container')
appendNode(grid_node, 'div', '', 'css items_container')
appendNode(grid_node, 'div', '', 'javascript items_container')

const html_node = $('.html')
const css_node = $('.css')
const javascript_node = $('.javascript')

const add_item_column = (type, type_node) => {
    const arr_column = data.filter((item) => item.type === type)
    const number_done = arr_column.filter(
        (item) => item.status === 'done'
    ).length
    appendNode(
        type_node,
        'p',
        `${type} - <span class='done_ratio'>${number_done}/${arr_column.length}</span>`,
        'type_quantity'
    )

    arr_column.forEach((item) => {
        appendNode(
            type_node,
            'div',
            `
            <div class="list_item_content">
                <div class="item_icon_label">
                    <div class="item_status ${item.status}"></div>
                    <span class="list_item_label">${item.label}</span>
                </div>
                <div class="item_icons flex"></div>
                <div class="items_drag"></div>
            </div>
        `,
            `${type}__item list_item`
        )
    })
}
add_item_column('html', html_node)
add_item_column('css', css_node)
add_item_column('javascript', javascript_node)

$$('.item_icons').forEach((item) => {
    appendNode(item, 'i', '', 'fa-regular fa-star')
    appendNode(item, 'i', '', 'fa-solid fa-dollar-sign')
})

// test randomly
const group_randomly = (type_group) => {
    if (type_group === 1) {
        appendNode(
            container,
            'div',
            `
            <div class="items_container random0">
                <p class='text-center'>
                Random 0 - <span class='done_ratio'></span>
                </p>
            </div>
            <div class="items_container random1">
                <p class='text-center'>
                Random 1 - <span class='done_ratio'></span>
                </p>
            </div>
            <div class="items_container random2">
                <p class='text-center'>
                Random 2 - <span class='done_ratio'></span>
                </p>
            </div>
            <div class="items_container random3">
                <p class='text-center'>
                Random 3 - <span class='done_ratio'></span>
                </p>
            </div>
            `,
            'grid_randomly grid grid-cols-4 gap-4'
        )

        Array.from($$('.list_item')).forEach((item) => {
            const clone = item.cloneNode(true)
            const x = getRandomInt(4)
            clone.classList.add(`type_random${x}`)
            $(`.random${x}`).append(clone)
        })
        $('.grid_node').classList.add('hidden')
        addEventDragDrop()
    }
    if (type_group === 0) {
        $('.grid_node').classList.remove('hidden')
        $('.grid_randomly').remove()
    }
    update_status()
}

const addEventDragDrop = () => {
    let dropped
    let dragged
    let touchX = 0
    let touchY = 0
    let isDragging = false
    let dx = 0
    let dy = 0
    let sideBySide = false
    let clone
    let clone_drop
    let first_item_movedown = null
    let dragging_items_container

    const handleTouchStart = (e) => {
        if (e.which !== 1 || !e.target.classList.contains('items_drag')) return
        isDragging = true
        dragged = e.target.classList.contains('list_item')
            ? e.target
            : getParent(e.target, '.list_item')

        clone = dragged.cloneNode(true)
        dragged.classList.add('dragging')
        const items_container = getParent(dragged, '.items_container')
        items_container.append(clone)
        dx = e.clientX
        dy = e.clientY - dragged.getBoundingClientRect().y
        styleInline(clone, {
            position: 'absolute',
            left: 0 + 'px',
            top:
                dragged.getBoundingClientRect().y + window.scrollY - 115 + 'px',
            transform: 'rotateZ(5deg)',
            pointerEvents: 'none',
            zIndex: 100
        })
        clone.onmouseup = null
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        touchX = e.clientX - dx
        touchY = e.clientY - dy - 115 + window.scrollY
        styleInline(clone, {
            left: `${touchX}px`,
            top: `${touchY}px`
        })
        $('.cancel_drag_zone').classList.add('dragging')

        // Reset position top of all item
        dragging_items_container = e.target.matches('.items_container')
            ? e.target
            : getParent(e.target, '.items_container')

        $$('.items_container').forEach((item) => {
            if (item === dragging_items_container)
                item.setAttribute('animate', true)
            else {
                item.removeAttribute('animate')
            }
        })

        $$('.items_container:not([animate]) .list_item').forEach((item) => {
            if (item !== clone) {
                item.style.top = null
            }
        })

        clone_drop && clone_drop.remove()
        if (dragging_items_container) {
            first_item_movedown = null
            dragging_items_container
                .querySelectorAll('.list_item')
                .forEach((item) => {
                    if (item === clone) return

                    // dragged and clone side by side
                    const dragged_bounding = dragged?.getBoundingClientRect()
                    if (
                        dragging_items_container.isEqualNode(
                            getParent(dragged, '.items_container')
                        ) &&
                        e.clientY - dragged_bounding.top <
                            2 * dragged_bounding.height &&
                        e.clientY - dragged_bounding.top >
                            -1 * dragged_bounding.height
                    ) {
                        sideBySide = true
                        item.style.top = null
                        return
                    }

                    // item
                    sideBySide = false
                    const bounding_item = item.getBoundingClientRect()
                    if (
                        e.clientY <
                        bounding_item.y + bounding_item.height / 2
                    ) {
                        first_item_movedown ??= item
                        item.style.top = `${bounding_item.height}px`
                        item.style.transition = 'top 0.3s ease'
                    } else {
                        item.style.top = null
                    }
                })

            // insert clone 2 fake item insert
            clone_drop = dragged.cloneNode(true)
            !sideBySide &&
                dragging_items_container.insertBefore(
                    clone_drop,
                    first_item_movedown
                )

            if (first_item_movedown) {
                // styleInline(clone_drop, {
                //     transition: null,
                //     position: 'absolute',
                //     top:
                //         first_item_movedown.getBoundingClientRect().top -
                //         5.5 *
                //             first_item_movedown.getBoundingClientRect().height +
                //         window.scrollY +
                //         'px'
                // })
                clone_drop.style.transition = null
                clone_drop.style.position = 'absolute'
                clone_drop.style.top =
                    first_item_movedown.getBoundingClientRect().top -
                    4 * first_item_movedown.getBoundingClientRect().height +
                    window.scrollY +
                    'px'
            }
        }
    }

    const handleTouchEnd = (e) => {
        if (!isDragging) return
        isDragging = false
        dragged.classList.remove('dragging')
        breakme: if (e.target.classList.contains('cancel_drag_zone')) {
            dragged = undefined
        } else {
            if (e.target.classList.contains('items_container')) {
                dropped = e.target
            } else {
                dropped = getParent(e.target, '.items_container')
            }

            if (!dropped || sideBySide) break breakme

            // Insert item above drop zone
            if (first_item_movedown) {
                dropped.insertBefore(dragged, first_item_movedown)
                $$('.list_item').forEach((item) => {
                    item.style.top = null
                })
            } else {
                dropped.append(dragged)
            }
        }
        // Reset transition all item when mouse up
        $$('.list_item').forEach((item) => {
            item.style.transition = null
        })

        $('.cancel_drag_zone').classList.remove('dragging')
        clone.remove()
        clone_drop && clone_drop.remove()
        update_status()
    }

    $$('.items_drag').forEach((item) => {
        item.addEventListener('mousedown', handleTouchStart)
    })

    addEventListener('mousedown', function (e) {
        if (e.which === 1) return
        handleTouchEnd(e)
    })
    addEventListener('mousemove', handleTouchMove)
    addEventListener('mouseup', handleTouchEnd)
}
addEventDragDrop()

const update_status = () => {
    $$('.done_ratio').forEach((item) => {
        const items_container = getParent(item, '.items_container')
        const total_done = items_container.querySelectorAll('.done').length
        const total = items_container.querySelectorAll('.list_item').length
        item.innerHTML = `${total_done}/${total}`
    })
}

appendNode(
    $('.container'),
    'div',
    `
`,
    'cancel_drag_zone'
)

const add_event_slide_delete_item = () => {
    let isDragging = false
    let current_item
    function handleTouchStart(e) {
        if (
            e.target.matches('.items_drag') ||
            e.target.matches('button') ||
            e.target.matches('.btn--delete') ||
            e.which !== 1
        )
            return

        isDragging = true
        current_item = this
    }

    async function handleDelete() {
        const item_delete = getParent(this, '.list_item')
        const isFirstItem =
            item_delete ===
            item_delete.parentElement.querySelector('.list_item')
        styleInline(item_delete, {
            maxHeight: '100px',
            transition: 'all 0.5s ease'
        })

        setTimeout(() => {
            styleInline(item_delete, {
                maxHeight: '0px',
                opacity: 0,
                margin: isFirstItem ? '8px 0 -8px 0' : '-8px 0',
                transform: 'scale(0)'
            })
            setTimeout(() => {
                item_delete.remove()
            }, 1000)
        })

        update_status()
    }

    function handleTouchMove(e) {
        if (!isDragging) return
        if (e.movementX < -10) {
            if (current_item.querySelector('.btn--delete')) return
            appendNode(
                current_item,
                'div',
                `
            <button>Delete</button>
            `,
                'btn--delete'
            )
            current_item.style.display = 'flex'
            current_item.querySelector('.list_item_content').style.width = '80%'

            $$('.btn--delete').forEach((item) =>
                item.addEventListener('click', handleDelete)
            )
        }
        if (e.movementX > 10) {
            if (current_item.querySelector('.btn--delete')) {
                current_item.querySelector('.list_item_content').style.width =
                    null
                current_item.querySelector('.btn--delete').remove(0)
                return
            }
        }
    }

    function handleTouchUp(e) {
        if (isDragging) isDragging = false
    }

    $$('.list_item').forEach((item) => {
        item.addEventListener('mousedown', handleTouchStart)
    })
    addEventListener('mousemove', handleTouchMove)
    addEventListener('mouseup', handleTouchUp)
}
add_event_slide_delete_item()
