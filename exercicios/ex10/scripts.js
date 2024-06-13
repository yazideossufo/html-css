/* scripts.js */

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.submenu').style.display = 'block';
        });

        item.addEventListener('mouseout', () => {
            item.querySelector('.submenu').style.display = 'none';
        });

        item.addEventListener('click', () => {
            const content = document.getElementById('conteudo');
            const submenuItems = item.querySelectorAll('.submenu li');
            let newContent = '<h1>' + item.textContent.trim() + '</h1><ul>';
            submenuItems.forEach(subItem => {
                newContent += '<li>' + subItem.textContent + '</li>';
            });
            newContent += '</ul>';
            content.innerHTML = newContent;
        });
    });
});
