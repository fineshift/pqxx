var hierarchy =
[
    [ "std::back_insert_iterator< pqxx::tablewriter >", "a00005.html", null ],
    [ "pqxx::basic_fieldstream< CHAR, TRAITS >", "a00007.html", null ],
    [ "pqxx::basic_ilostream< CHAR, TRAITS >", "a00008.html", null ],
    [ "pqxx::basic_lostream< CHAR, TRAITS >", "a00009.html", null ],
    [ "pqxx::basic_olostream< CHAR, TRAITS >", "a00010.html", null ],
    [ "std::char_traits< CHAR >", "a00015.html", null ],
    [ "std::char_traits< char >", "a00016.html", null ],
    [ "std::char_traits< unsigned char >", "a00017.html", null ],
    [ "pqxx::connection_base", "a00023.html", [
      [ "pqxx::basic_connection< CONNECTPOLICY >", "a00006.html", null ]
    ] ],
    [ "pqxx::connectionpolicy", "a00024.html", [
      [ "pqxx::connect_async", "a00019.html", null ],
      [ "pqxx::connect_direct", "a00020.html", null ],
      [ "pqxx::connect_lazy", "a00021.html", null ],
      [ "pqxx::connect_null", "a00022.html", null ]
    ] ],
    [ "pqxx::cursor_base", "a00030.html", [
      [ "pqxx::internal::sql_cursor", "a00085.html", null ]
    ] ],
    [ "pqxx::internal::deref_ptr< T >", "a00033.html", null ],
    [ "pqxx::internal::dereference< ITER >", "a00034.html", null ],
    [ "pqxx::errorhandler", "a00036.html", [
      [ "pqxx::quiet_errorhandler", "a00076.html", null ]
    ] ],
    [ "pqxx::internal::Escaper< IT >", "a00037.html", null ],
    [ "pqxx::field", "a00040.html", [
      [ "pqxx::const_tuple_iterator", "a00028.html", [
        [ "pqxx::const_reverse_tuple_iterator", "a00027.html", null ]
      ] ]
    ] ],
    [ "pqxx::field_streambuf< CHAR, TRAITS >", "a00041.html", null ],
    [ "pqxx::icursor_iterator", "a00043.html", null ],
    [ "pqxx::icursorstream", "a00044.html", null ],
    [ "pqxx::prepare::invocation", "a00053.html", null ],
    [ "pqxx::isolation_traits< LEVEL >", "a00054.html", null ],
    [ "pqxx::items< T, CONT >", "a00055.html", null ],
    [ "pqxx::largeobject", "a00056.html", [
      [ "pqxx::largeobjectaccess", "a00058.html", null ]
    ] ],
    [ "pqxx::largeobject_streambuf< CHAR, TRAITS >", "a00057.html", null ],
    [ "pqxx::internal::namedclass", "a00059.html", [
      [ "pqxx::internal::transactionfocus", "a00105.html", [
        [ "pqxx::pipeline", "a00068.html", null ],
        [ "pqxx::subtransaction", "a00096.html", null ],
        [ "pqxx::tablestream", "a00099.html", [
          [ "pqxx::tablereader", "a00098.html", null ],
          [ "pqxx::tablewriter", "a00100.html", null ]
        ] ]
      ] ],
      [ "pqxx::transaction_base", "a00104.html", [
        [ "pqxx::dbtransaction", "a00032.html", [
          [ "pqxx::basic_robusttransaction", "a00011.html", [
            [ "pqxx::robusttransaction< ISOLATIONLEVEL >", "a00083.html", null ]
          ] ],
          [ "pqxx::basic_transaction", "a00012.html", [
            [ "pqxx::transaction< ISOLATIONLEVEL, READWRITE >", "a00103.html", null ]
          ] ],
          [ "pqxx::subtransaction", "a00096.html", null ]
        ] ],
        [ "pqxx::nontransaction", "a00060.html", null ]
      ] ]
    ] ],
    [ "pqxx::notification_receiver", "a00062.html", [
      [ "pqxx::internal::notify_listener_forwarder", "a00064.html", null ]
    ] ],
    [ "pqxx::notify_listener", "a00063.html", null ],
    [ "std::numeric_limits< T >", "a00065.html", null ],
    [ "pqxx::internal::parameterized_invocation", "a00067.html", null ],
    [ "pqxx::internal::PQAlloc< T, DELETER >", "a00073.html", null ],
    [ "pqxx::internal::PQAlloc< const internal::result_data, internal::freemem_result_data >", "a00073.html", [
      [ "pqxx::result", "a00082.html", null ]
    ] ],
    [ "pqxx::internal::PQAlloc< unsigned char, pqxx::internal::freemallocmem_templated< unsigned char > >", "a00073.html", [
      [ "pqxx::binarystring", "a00013.html", null ]
    ] ],
    [ "pqxx::pqxx_exception", "a00074.html", [
      [ "pqxx::argument_error", "a00004.html", null ],
      [ "pqxx::conversion_error", "a00029.html", null ],
      [ "pqxx::failure", "a00038.html", [
        [ "pqxx::broken_connection", "a00014.html", [
          [ "pqxx::too_many_connections", "a00102.html", null ]
        ] ],
        [ "pqxx::in_doubt_error", "a00045.html", null ],
        [ "pqxx::sql_error", "a00086.html", [
          [ "pqxx::data_exception", "a00031.html", null ],
          [ "pqxx::feature_not_supported", "a00039.html", null ],
          [ "pqxx::insufficient_privilege", "a00046.html", null ],
          [ "pqxx::insufficient_resources", "a00047.html", [
            [ "pqxx::disk_full", "a00035.html", null ],
            [ "pqxx::out_of_memory", "a00066.html", null ]
          ] ],
          [ "pqxx::integrity_constraint_violation", "a00048.html", [
            [ "pqxx::check_violation", "a00018.html", null ],
            [ "pqxx::foreign_key_violation", "a00042.html", null ],
            [ "pqxx::not_null_violation", "a00061.html", null ],
            [ "pqxx::restrict_violation", "a00081.html", null ],
            [ "pqxx::unique_violation", "a00112.html", null ]
          ] ],
          [ "pqxx::invalid_cursor_name", "a00050.html", null ],
          [ "pqxx::invalid_cursor_state", "a00051.html", null ],
          [ "pqxx::invalid_sql_statement_name", "a00052.html", null ],
          [ "pqxx::plpgsql_error", "a00069.html", [
            [ "pqxx::plpgsql_no_data_found", "a00070.html", null ],
            [ "pqxx::plpgsql_raise", "a00071.html", null ],
            [ "pqxx::plpgsql_too_many_rows", "a00072.html", null ]
          ] ],
          [ "pqxx::syntax_error", "a00097.html", [
            [ "pqxx::undefined_column", "a00108.html", null ],
            [ "pqxx::undefined_function", "a00109.html", null ],
            [ "pqxx::undefined_table", "a00110.html", null ]
          ] ]
        ] ]
      ] ],
      [ "pqxx::internal_error", "a00049.html", null ],
      [ "pqxx::range_error", "a00077.html", null ],
      [ "pqxx::usage_error", "a00113.html", null ]
    ] ],
    [ "pqxx::prepare::internal::prepared_def", "a00075.html", null ],
    [ "pqxx::internal::reactivation_avoidance_counter", "a00078.html", null ],
    [ "pqxx::internal::reactivation_avoidance_exemption", "a00079.html", null ],
    [ "pqxx::internal::refcount", "a00080.html", null ],
    [ "pqxx::internal::scoped_array< T >", "a00084.html", null ],
    [ "pqxx::stateless_cursor< up, op >", "a00087.html", null ],
    [ "pqxx::string_traits< T >", "a00088.html", null ],
    [ "pqxx::string_traits< char * >", "a00089.html", null ],
    [ "pqxx::string_traits< char[N]>", "a00090.html", null ],
    [ "pqxx::string_traits< const char * >", "a00091.html", null ],
    [ "pqxx::string_traits< const char[N]>", "a00092.html", null ],
    [ "pqxx::string_traits< const std::string >", "a00093.html", null ],
    [ "pqxx::string_traits< std::string >", "a00094.html", null ],
    [ "pqxx::string_traits< std::stringstream >", "a00095.html", null ],
    [ "pqxx::thread_safety_model", "a00101.html", null ],
    [ "pqxx::transactor< TRANSACTION >", "a00106.html", null ],
    [ "pqxx::tuple", "a00107.html", [
      [ "pqxx::const_result_iterator", "a00025.html", [
        [ "pqxx::const_reverse_result_iterator", "a00026.html", null ]
      ] ]
    ] ],
    [ "pqxx::internal::unique< GUEST >", "a00111.html", null ]
];