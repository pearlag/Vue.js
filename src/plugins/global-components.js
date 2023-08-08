import AppAlert from '@/components/app/AppAlert.vue';
import AppCard from '@/components/app/AppCard.vue';
import AppGrid from '@/components/app/AppGrid.vue';
import AppModal from '@/components/app/AppModal.vue';
import AppPagination from '@/components/app/AppPagination.vue';

export default {
	install(app) {
		app
			.component('AppAlert', AppAlert)
			.component('AppCard', AppCard)
			.component('AppGrid', AppGrid)
			.component('AppModal', AppModal)
			.component('AppPagination', AppPagination);
	},
};
