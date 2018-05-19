<template>
    <div>

        <template>
                <v-toolbar dense flat class="mb-2">

                    <!-- <v-toolbar-title>Персонал</v-toolbar-title> -->
                    <div class="headline">Персонал</div>
                    <v-spacer></v-spacer>
                    <template>
                        <v-dialog v-model="dialog" max-width="500px">
                        <v-btn icon small slot="activator" class="mb-2">
                            <v-icon color="blue" >add</v-icon>
                        </v-btn>
                        <v-card>
                            <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.firstName" label="First Name"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.lastName" label="Last Name"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.hireDate" label="Hire Date"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.salary" label="Salary"></v-text-field>
                                </v-flex>
                                </v-layout>
                            </v-container>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
</template>
            <v-btn icon small class="mb-2">
              <v-icon small color="blue">fa-filter</v-icon>
            </v-btn>
            <v-btn icon small class="mb-2">
              <v-icon color="blue">more_vert</v-icon>
            </v-btn>

        </v-toolbar>
    </template>



    <v-data-table
      :headers="headers"
      :items="employeeList"
      hide-actions
      class="elevation-1"

    >
<template slot="items" slot-scope="props">
    <td>
        {{ props.item.firstName }}</td>
    <td class="text-xs-left">{{ props.item.lastName }}</td>
    <td class="text-xs-right">{{ props.item.hireDate }}</td>
    <td class="text-xs-right">{{ props.item.salary }}</td>
    <td class="justify-center layout px-0">
        <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="green">edit</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
        </v-btn>
    </td>
</template>

<template slot="no-data">
    <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
</template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Personnel",
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "First Name",
        align: "left",
        sortable: true,
        value: "firstName"
      },
      {
        text: "Last Name",
        value: "lastName",
        align: "left"
      },
      {
        text: "Hire Date",
        value: "hireDate",
        align: "right"
      },
      {
        text: "Salary",
        value: "salary",
        align: "right"
      },
      {
        text: "Actions",
        value: "actions",
        align: "center"
      }
    ],
    currentPage: 1,
    editedIndex: -1,
    editedItem: {
      firstName: "",
      lastName: "",
      hireDate: "",
      salary: ""
    },
    defaultItem: {
      firstName: "",
      lastName: "",
      hireDate: "",
      salary: ""
    }
  }),
  // Вычисляемые свойства, в отличие от методов, кешируются, основываясь на своих зависимостях
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      };
      return { type, filters };
    },
    pages() {
      if (this.isLoading || this.employeeCount <= this.itemsPerPage) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.employeeCount / this.itemsPerPage)).keys()
      ].map(e => e + 1);
    },
    ...mapGetters(["employeeCount", "isLoading", "employeeList"]),
    // employeeList() {
    //     return this.$store.getters.employeeList.data;
    // },
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  mounted() {
    // this.$store.dispatch("fetchEmployeeList");
    console.log("mounted");
    this.fetchEmployeeList();
  },
  // Слежение за свойствами компонента. Для обновления данных, зависимых от свойств
  watch: {
    currentPage(newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
      this.fetchArticles();
    },
    type() {
      this.resetPagination();
      this.fetchArticles();
    },

    dialog(val) {
      val || this.close();
    }
  },

  // Методы, в отличие от вычисляемый свойств, не кэшируются
  methods: {
    fetchEmployeeList() {
      console.log("dispatch fetchEmployeeList");
      this.$store.dispatch("fetchEmployeeList", this.listConfig);
    },
    resetPagination() {
      this.listConfig.offset = 0;
      this.currentPage = 1;
    },
    editItem(item) {
      // this.editedIndex = this.desserts.indexOf(item)
      this.editedIndex = this.$store.getters.employeeList.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.$store.getters.employeeList.data.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.$store.getters.employeeList.data.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        // Object.assign(this.desserts[this.editedIndex], this.editedItem)
        Object.assign(
          this.$store.getters.employeeList.data[this.editedIndex],
          this.editedItem
        );
      } else {
        // this.desserts.push(this.editedItem)
        this.$store.getters.employeeList.data.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
