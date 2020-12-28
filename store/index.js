export const state = () => ({
    allProducts: []
});

export const mutations = {
    setAllProducts(state, list) {
        state.allProducts = list;
    }
};

export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('getAllProducts');
    },
    async getAllProducts({ commit }) {
        let files = await require.context('~/assets/content/products/', false, /\.json$/);
        let allProducts = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        commit('setAllProducts', allProducts);
    },
};