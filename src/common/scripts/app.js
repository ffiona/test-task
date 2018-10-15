const $form = $('.person__form');
const $addSkills = $form.find('.person__add-skills');
const activeClass = 'is-active';

$form.find('.person__add-skills-btn').on('click', (event) => {
    $(event.currentTarget).parent().addClass(activeClass);
});

$addSkills.find('.person__control_submit').on('click', () => {
    const skill = $('.person__skills-select option:selected').text();

    $('.person__skills-list').append(`<li class="person__skill">${skill}<button type="button" class="person__skill-remove">✕</button></li>`);
});

$(window).on('click', () => {
    $addSkills.removeClass(activeClass);
});

$addSkills.on('click', (event) => {
    event.stopPropagation();
});

$form.find('input')
    .on('focus', (event) => {
        $(event.currentTarget).next().addClass(activeClass);
    })
    .on('blur', (event) => {
        setTimeout(() => {
            $(event.currentTarget).next().removeClass(activeClass);
        }, 200);
});

$form.find('.person__control_reject').on('click', (event) => {
    const $input = $(event.currentTarget).parent().prev();
    const current = $input.data('current');

    $input.val(current);
});

$form.find('.person__control_submit').on('click', (event) => {
    const $input = $(event.currentTarget).parent().prev();
    const value = $input.val();

    $input.attr('data-current', value);
});

$('body').on('click', '.person__skill-remove', (event) => {
    $(event.currentTarget).parent().remove();
});
