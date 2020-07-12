// Profil düzenleme Çalışma Günleri Check Select Kontrol Fonksiyonu
function CheckBoxCheckedControl(){
	$('#calisma_gunleri.form-ogesi input[type="checkbox"]').each(function(){
		
		if(!$(this).is(':checked')){
			$(this).closest('.form-ogesi-subform').find('select').prop('disabled', true);
		}
		else{
			$(this).closest('.form-ogesi-subform').find('select').prop('disabled', false);
		}
		
	});
}

$('#calisma_gunleri.form-ogesi input[type="checkbox"]').click(function(){
	CheckBoxCheckedControl();
});


$(document).ready(function(){
//PRICE TABLE PROPERTIES
	$('.btn-property-info').click(function(){
		$('#modal_price_table_properties').modal().show();
		return false;
	});
	
// FULL SCREEN EXPAND

//MODALLAR
	//Silme modalı
	$('.btn-delete').click(function(){
		$('#modal_delete').modal().show();
		return false;
	});

	//Kullanıcıyı engelleme modalı
	$('.btn-ban-user').click(function(){
		$('#modal_ban_user').modal().show();
		return false;
	});

	//Yüklenen resmi düzenleme modalı
	$('.btn-edit-image').click(function(){
		$('#modal_edit_image').modal().show();
		return false;
	});
	
	//Kapak görseli ekleme modalı
	$('.btn-add-cover-image').click(function(){
		$('#modal_add_cover_image').modal().show();
		return false;
	});
	
	//Profil doluluğu yardım modalı
	$('.btn-how-to-fill-profile').click(function(){
		$('#modal_how_to_fill_profile').modal().show();
		return false;
	});

//LEFT SIDEBAR MENU COLLAPSE ICON CHANGE
	//her bir menü öğesi için
	$('.panel.collapse-menu').each(function(){
		var collapseMenuLink = $(this).find('a.collapse-menu-header-title');
		
		//öğeye tıklandığında
		$(collapseMenuLink).click(function(){
			var collapseMenuLinkIcon = $(this).find('i.collapse-menu-header-title-toggle-icon');
			
			//öğenin içinde bulunan iconu eğer fa-angle-down ise up, değilse down yap
			if( $(collapseMenuLinkIcon).hasClass('fa-angle-down') == true ){
				$(collapseMenuLinkIcon).removeClass('fa-angle-down');
				$(collapseMenuLinkIcon).addClass('fa-angle-up');
			}
			else{
				$(collapseMenuLinkIcon).removeClass('fa-angle-up');
				$(collapseMenuLinkIcon).addClass('fa-angle-down');
			};
			
		});

	
	});

//MEDIA UPLOADED PREVIEW INFORMATION BUTTON
	$('.btn-modal-uploaded-media-info').click(function(){
		$('.modal-uploaded-media-info').toggle()
		$('.modal-uploaded-media-preview').toggle();
		return false;
	});

//MESSAGE SCROLLDOWN TO LAST MESSAGE
	
	//son mesaj dialogu
	var lastChildMessageDialog = $('.message-dialog:last-child');
	//scrollspy element seçicisi
	var scrollspySelector = $('.message-dialog-reading-area-container .scrollspy-large');
	//animasyon başlangıcı offset ile en alta indirme 750ms
	$(scrollspySelector).stop().animate({scrollTop: lastChildMessageDialog.offset().top}, 1000);
	
	CheckBoxCheckedControl();

});